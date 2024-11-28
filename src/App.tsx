import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/OptionsTable";

const App = () => {
  const [buyModalData, setBuyModalData] = useState<{
    [key: string]: any;
  } | null>(null);

  const cols = [
    // First header is empty string for the checkbox
    { name: "", key: "" },
    { name: "Token Id", key: "tokenId" },
    { name: "Token Name", key: "tokenName" },
    { name: "Quantity", key: "quantity" },
    { name: "Premium", key: "premium" },
    { name: "Strike Price", key: "strikePrice" },
    { name: "Expiration", key: "expiry" },
    { name: "Seller", key: "seller" },
  ];

  const DUMMY_DATA = [
    {
      tokenId: "0.123456",
      tokenName: "sauce",
      quantity: 100,
      premium: 20,
      strikePrice: 200,
      expiry: 1732720752,
      seller: "0.123456",
    },
    {
      tokenId: "0.123457",
      tokenName: "pack",
      quantity: 100,
      premium: 20,
      strikePrice: 200,
      expiry: 1732720752,
      seller: "0.123456",
    },
    {
      tokenId: "0.123458",
      tokenName: "karate",
      quantity: 100,
      premium: 20,
      strikePrice: 200,
      expiry: 1732720752,
      seller: "0.123456",
    },
    {
      tokenId: "0.123459",
      tokenName: "grelf",
      quantity: 100,
      premium: 20,
      strikePrice: 200,
      expiry: 1732720752,
      seller: "0.123456",
    },
  ];

  const data = DUMMY_DATA;

  const handleRadioChange = (): void => {
    const selectedRadio = document.querySelectorAll(
      'input[type="radio"]:checked'
    )[1];
    const row = selectedRadio.closest("tr");
    if (row) {
      const data = row.querySelectorAll("td");
      const keys = [
        "tokenId",
        "tokenName",
        "quantity",
        "premium",
        "strikePrice",
        "expiry",
        "seller",
      ];
      const buyModalData: { [key: string]: any } = {};
      data.forEach((tData, index) => {
        const key = keys[index];
        const value = tData.textContent;
        buyModalData[key] = value;
      });
      setBuyModalData(buyModalData);
    }
  };
  const showModal = () => {
    const buyModal: any = document.getElementById("buyModal");
    if (buyModal) {
      buyModal.showModal();
    }
  };
  return (
    <>
      <Navbar />
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="optionTabs"
          role="tab"
          className="tab"
          aria-label="Calls"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <Table
            columns={cols}
            data={data}
            handleRadioChange={handleRadioChange}
          />
        </div>
        {/* <input
          type="radio"
          name="optionTabs"
          role="tab"
          className="tab"
          aria-label="Puts"
          defaultChecked
        /> */}
        <div role="tabpanel" className="tab-content p-10"></div>
      </div>

      <div className="flex justify-evenly">
        <button className="bg-primary rounded-md p-3" onClick={showModal}>
          Buy
        </button>
      </div>

      <dialog id="buyModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Option Details</h3>
          <p className="text-sm py-2">Token Id: {buyModalData?.tokenId}</p>
          <p className="text-sm py-2">Token Name: {buyModalData?.tokenName}</p>
          <p className="text-sm py-2">Quantity: {buyModalData?.quantity}</p>
          <p className="text-sm py-2">Premium: {buyModalData?.premium}</p>
          <p className="text-sm py-2">
            Strike Price: {buyModalData?.strikePrice}
          </p>
          <p className="text-sm py-2">Expiration: {buyModalData?.expiry}</p>
          <p className="text-sm py-2">Expiration: {buyModalData?.seller}</p>
          <button className="bg-primary rounded-md p-2" onClick={showModal}>
            Confirm Purchase
          </button>
        </div>
      </dialog>
    </>
  );
};

export default App;
