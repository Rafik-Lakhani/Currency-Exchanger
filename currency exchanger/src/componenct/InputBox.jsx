import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChnage,
  onCurrencyChnage,
  currencyOption = [],
  selectCurrency = "usd",
  fieldDisable = false,
  selectDisable = false,
}) {
  const id = useId();
  return (
    <div className="flex w-[400px] h-20 p-2 bg-white text-black flex-row rounded-2xl pl-5">
      <div className="flex flex-col w-[80%] h-full items-start justify-between">
        <label htmlFor={id}>{label}</label>
        <input
          type="number"
          value={amount}
          className="bg-white border-none text-lg text-black"
          onChange={(e) => onAmountChnage(e.target.value)}
          disabled={fieldDisable}
        />
      </div>
      <div className="flex flex-col w-[20%] h-full items-start justify-between">
        <label htmlFor={id}>currency</label>
        <select
          id=""
          className="bg-white w-[70px] text-black border-2 border-black border-solid rounded-lg"
          value={selectCurrency}
          onChange={(e) => onCurrencyChnage(e.target.value)}
          disabled={selectDisable}
        >
          {currencyOption.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
