// pages/merchant.tsx
// import SwapComponent from './SwapComponent';
import Balances from './Balances';
import MerchantDashboard from './MerchantDashboard';
import TransactionsComponent from './TransactionComponent';
// import { Transaction } from 'ethers';
import './App.css' ;
// import styles from '../styles/Home.module.css';

const MerchantPage: React.FC = () => {
  return (
    <div>
      <div id="container">
      <Balances></Balances>
      <MerchantDashboard></MerchantDashboard>
      <TransactionsComponent />
      </div>
    </div>
  );
};

export default MerchantPage;
