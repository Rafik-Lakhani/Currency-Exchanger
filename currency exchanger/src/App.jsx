import { useState } from "react";
import InputBox from "./componenct/InputBox";
import "./App.css";
import useFetchdata from "./hooks/useFetchdata";

function App() {
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const fetchdata = useFetchdata(from);
  const option = Object.keys(fetchdata);

  const convert = () => {
    setCurrency(amount * fetchdata[to]);
  };

  // here swap funtion that cnage to from value
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div className="flex flex-col  bg-white backdrop-blur-sm gap-2 bg-white/30 p-9 rounded-2xl ">
        <InputBox
          label="Form"
          amount={amount}
          fieldDisable={false}
          selectCurrency={from}
          onAmountChnage={setAmount}
          onCurrencyChnage={setFrom}
          currencyOption={option}
        />
        <button onClick={swap} className="w-[20%] self-center m-0 bg-yellow-500">Swap</button>
        <InputBox
          label="To"
          amount={currency}
          fieldDisable={true}
          selectDisable={false}
          selectCurrency={to}
          onAmountChnage={setCurrency}
          onCurrencyChnage={setTo}
          currencyOption={option}
        />
        <button onClick={convert} className="mt-3 bg-blue-600">
          Covert {from} to {to}
        </button>
      </div>
    </>
  );
}

export default App;
