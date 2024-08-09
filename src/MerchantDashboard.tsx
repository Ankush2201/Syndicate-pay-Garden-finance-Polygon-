import React, { useState, useEffect } from 'react';
import './App.css';
import { useMetaMaskStore } from './store';
import axios from 'axios';
import QRCode from 'qrcode.react';

const MerchantDashboard: React.FC = () => {
  const [walletID, setWalletID] = useState<string>('');
  const [preferredToken, setPreferredToken] = useState<string>('Sepolia');
  const { metaMaskIsConnected, connectMetaMask, evmProvider } = useMetaMaskStore();
  const [isWalletLocked, setIsWalletLocked] = useState<boolean>(false); // New state for locking the input

  const tokens = ['Sepolia', 'ETH', 'PolygonzkEVM', 'Astar'];

  const getTokenNumber = (token: string) => {
    if (token === 'Sepolia') return 0;
    if (token === 'ETH') return 1;
    if (token === 'PolygonzkEVM') return 2;
    if (token === 'Astar') return 3;
    return -1; // Return -1 if the token is not found
  };

  useEffect(() => {
    if (evmProvider && metaMaskIsConnected) {
      const fetchBalanceAndAddress = async () => {
        const signer = await evmProvider.getSigner();
        const address = await signer.getAddress();
        setWalletID(address); // Set walletID with the address
        setIsWalletLocked(true); // Lock the input after setting the wallet ID

        await axios.post('http://localhost:3001/updateMerchant', {
          walletID: address,
          preferredToken: getTokenNumber(preferredToken),
        });
      };
      fetchBalanceAndAddress();
    }
  }, [evmProvider, metaMaskIsConnected]);

  const handlePreferredTokenChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const token = event.target.value;
    setPreferredToken(token);
    console.log('Token:', token);
  
    try {
      await axios.post('http://localhost:3001/updateMerchant', {
        walletID,
        preferredToken: getTokenNumber(token),
      });
      console.log('Preferred token updated successfully');
    } catch (error) {
      console.error('Error updating preferred token:', error);
    }
  };

  return (
    <div id="Merchant-Dashboard">
      <h2>Merchant Dashboard</h2>
      <div>
        <label>
          Wallet ID:
          <input 
            type="text" 
            value={walletID} 
            onChange={(e) => setWalletID(e.target.value)} 
            disabled={isWalletLocked} // Disable the input if the wallet is locked
          />
        </label>
      </div>
      <div>
        <div>
        {walletID && (<QRCode value={walletID} />)}
        </div>
      </div>
      <div>
        <label>
          Preferred Token:
          <select value={preferredToken} onChange={handlePreferredTokenChange}>
            {tokens.map((token) => (
              <option key={token} value={token}>
                {token}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button onClick={connectMetaMask}>
          {metaMaskIsConnected ? 'Disconnect MetaMask' : 'Connect MetaMask'}
        </button>
      </div>
    </div>
  );
};

export default MerchantDashboard;
