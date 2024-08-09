// pages/customer.tsx
// import SwapComponent from './SwapComponent';
import TransactionsComponent from './TransactionComponent';
import PaytoConsumer from './PaymentPage';
import Balances from './Balances';
import './App.css' ;


const CustomerPage: React.FC = () => {
  return (
    <div id="container">
      <Balances></Balances>
      <PaytoConsumer></PaytoConsumer>
      {/* <SwapComponent></SwapComponent> */}
      <TransactionsComponent />
    </div>
  );
};

export default CustomerPage;
