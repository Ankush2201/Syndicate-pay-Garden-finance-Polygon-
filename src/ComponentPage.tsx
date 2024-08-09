// pages/customer.tsx
import SwapComponent from './SwapComponent';
import TransactionsComponent from './TransactionComponent';
// import SwapComponent2 from './PaymentPage';
import Balances from './Balances';
import './App.css' ;


const ComponentPage : React.FC = () => {
  return (
    <div id="container">
      <Balances></Balances>
      {/* <SwapComponent2></SwapComponent2> */}
      <SwapComponent></SwapComponent>
      <TransactionsComponent />
    </div>
  );
};

export default ComponentPage;
