import React, { useState } from 'react';
import {
  BitcoinNetwork,
  BitcoinWallet,
  BitcoinProvider,
  EVMWallet,
} from '@catalogfi/wallets';
import {
  Orderbook,
  Chains,
  Assets,
  Actions,
  parseStatus,
  TESTNET_ORDERBOOK_API,
} from '@gardenfi/orderbook';
import axios from 'axios';
import { GardenJS } from '@gardenfi/core';
import UnifiedBridge from './UnifiedBridge';
// import UnifiedBridge from './UnifiedBridge.ts';  // Import your contract
import { JsonRpcProvider, Wallet, ethers} from 'ethers';
import QRCodeScanner from './QRCode';
import './App.css' ;


const PayToConsumer: React.FC = () => {
  const [btcKey, setBtcKey] = useState<string>('');
  const [isWIF, setIsWIF] = useState<boolean>(true);
  const [recipientPublicKey, setRecipientPublicKey] = useState<string>('');
  const [sendAmount, setSendAmount] = useState<number>(0.0001); // Amount in BTC
  const [message, setMessage] = useState<string>('');
  const [preferredToken, setPreferredToken] = useState<number>(1);
  // const [scannedAddress, setScannedAddress] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(true); 

  const handleScannedAddress = (address: string) => {
    setRecipientPublicKey(address);
    setIsScanning(false); 
  };

  const stopScanning = () => {
    setIsScanning(false);
  };

  const checkBalance = async () => {
    const bitcoinProvider = new BitcoinProvider(BitcoinNetwork.Testnet);
    const bitcoinWallet = isWIF
      ? BitcoinWallet.fromWIF(btcKey, bitcoinProvider)
      : BitcoinWallet.fromPrivateKey(btcKey, bitcoinProvider);

    const balance = await bitcoinWallet.getBalance();
    console.log(`Wallet balance: ${balance} satoshis`);

    return balance;
  };

  const handleSwap = async () => {
    try {
      const fetchPreferredToken = async (walletAddress: string) => {
        try {
          const response = await axios.get(`/api/wallet-preference/${walletAddress}`);
          console.log('Preferred token Fetched:', response.data.preferredToken);
          setPreferredToken(0);
        } catch (error) {
          console.error('Error fetching preferred token:', error);
        }
      };

      const balance = await checkBalance();
      const sendAmountSats = sendAmount * 1e8; // Convert BTC to Satoshis
  
      if (balance < sendAmountSats) {
        setMessage('Insufficient funds in the Bitcoin wallet.');
        return;
      }
  
      // Create bitcoin wallet from the provided key
      const bitcoinWallet = isWIF
        ? BitcoinWallet.fromWIF(btcKey, new BitcoinProvider(BitcoinNetwork.Testnet))
        : BitcoinWallet.fromPrivateKey(btcKey, new BitcoinProvider(BitcoinNetwork.Testnet));
  
      // Create EVM wallet
      const signer = new Wallet(
        '63cbef63075b3c6a0a190b81562d3b36d96b3ab974db39fc8990d9b9aa4d02c0',
        new JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/BQyVin0-QGVGoRC5NbfS892zybhRshxY')
      );
      const evmWallet = new EVMWallet(signer);
  
      const orderbook = await Orderbook.init({
        url: TESTNET_ORDERBOOK_API,
        signer,
      });
  
      const wallets = {
        [Chains.bitcoin_testnet]: bitcoinWallet,
        [Chains.ethereum_sepolia]: evmWallet,
      };
  
      const garden = new GardenJS(orderbook, wallets);
  
      const receiveAmountSats = (1 - 0.3 / 100) * sendAmountSats;
      await fetchPreferredToken(recipientPublicKey)
  
      const orderId = await garden.swap(
        Assets.bitcoin_testnet.BTC,
        Assets.ethereum_sepolia.WBTC,
        sendAmountSats,
        receiveAmountSats
      );
  
      garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
        const order = orders.find((order) => order.ID === orderId);
        if (!order) return;
  
        const action = parseStatus(order);
  
        if (action === Actions.UserCanInitiate || action === Actions.UserCanRedeem) {
          const swapper = garden.getSwap(order);
          const swapOutput = await swapper.next();
  
          setMessage(`Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`);
  
          if (swapOutput.action === 'Redeem') {
            setTimeout(async () => {
          setMessage(`Connecting to Agglayer bridge contract`);

              // let ethers = require('./node_modules/ethers')
              // ethers.utils.formatUnits(balance, 18)
              // const  UnifiedBridge = require('./UnifiedBridge.ts');
              const contract = new ethers.Contract(
                '0x528e26b25a34a4a5d0dbda1d57d318153d2ed582',
                UnifiedBridge,
                signer
              );
              console.log("Agglayer bridge contract has been Connected");
           
              const txn = await contract.bridgeAsset(
                preferredToken, // Use the preferred token from MongoDB
                recipientPublicKey, // Use the recipient's public key from user input
                1000n,
                '0xaD9d14CA82d9BF97fFf745fFC7d48172A1c0969E', // Bridge contract address
                true,
                '0x'
              );
                   console.log("Agglayer bridge txn hash" , txn.hash);
                 }, 60000);
          }
        }
      });
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    }
  };
  

  return (
    <div className = "Dashboard-Merchant">
      <h2>BTC to WBTC Swap</h2>
      {isScanning && (
        <QRCodeScanner onScanned={handleScannedAddress} onStopScanning={stopScanning} />
      )}{/* QR code scanner */}
      <div>
        <label>
          Key Type:
          <select value={isWIF ? 'WIF' : 'PrivateKey'} onChange={(e) => setIsWIF(e.target.value === 'WIF')}>
            <option value="WIF">WIF</option>
            <option value="PrivateKey">Private Key</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Bitcoin Key:
          <input
            type="text"
            value={btcKey}
            onChange={(e) => setBtcKey(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Recipient's Public Key:
          <input
            type="text"
            value={recipientPublicKey}
            onChange={(e) => setRecipientPublicKey(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount to Send (BTC):
          <input
            type="number"
            value={sendAmount}
            onChange={(e) => setSendAmount(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleSwap}>Initiate Swap</button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PayToConsumer;
