// QRCode.tsx
import React, { useRef, useEffect } from 'react';
import jsQR from 'jsqr';

interface QRCodeProps {
    onScanned: (address: string) => void; // Callback for when QR code is scanned
    onStopScanning?: () => void; // Optional callback for when scanning stops
  }
  

const QRCodeScanner: React.FC<QRCodeProps> = ({ onScanned }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    const scanQRCode = () => {
      if (videoRef.current && videoRef.current.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
        const canvas = canvasRef.current!;
        const context = canvas.getContext('2d')!;
        canvas.height = videoRef.current.videoHeight;
        canvas.width = videoRef.current.videoWidth;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          onScanned(code.data); // Call onScanned with the scanned QR code data

          // Stop the video stream once a QR code is scanned
          if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
          }
        }
      }
      requestAnimationFrame(scanQRCode);
    };

    requestAnimationFrame(scanQRCode);
  }, [onScanned]);

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default QRCodeScanner;
