import { useState } from "react";
import MerchantPage from "./MerchantPage";
import CustomerPage from "./CustomerPage";
import { useGardenSetup } from "./store";
import ComponentPage from "./ComponentPage";
import "./App.css";

const App: React.FC = () => {
  useGardenSetup();
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  // const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const handleButtonClick = (component: string) => {
    setSelectedComponent(component);
    setIsFixed(true);
  };

  return (
    <div id="container">
      {!selectedComponent && (
        <div id="options" className={isFixed ? "fixed" : ""}>
          <button onClick={() => handleButtonClick("Customer")}>Pay</button>
          <button onClick={() => handleButtonClick("merchant")}>Receive</button>
          <button onClick={() => handleButtonClick("Swap")}>Swap</button>
        </div>
      )}

      {selectedComponent === "Customer" && <CustomerPage />}
      {selectedComponent === "merchant" && <MerchantPage />}
      {selectedComponent === "Swap" && <ComponentPage />}


    </div>
  );
};

export default App;
