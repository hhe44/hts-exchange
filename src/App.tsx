import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/OptionsTable";

const App = () => {
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
    console.log(row);
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
        />
        <div role="tabpanel" className="tab-content p-10">
          <Table
            columns={cols}
            data={data}
            handleRadioChange={handleRadioChange}
          />
        </div>
        <input
          type="radio"
          name="optionTabs"
          role="tab"
          className="tab"
          aria-label="Puts"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10"></div>
      </div>

      <div className="flex justify-evenly">
        <button className="bg-primary rounded-md p-4" onClick={showModal}>
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
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
          <button className="bg-primary rounded-md p-4" onClick={showModal}>
            Create Option
          </button>
        </div>
      </dialog>
    </>
  );
};

export default App;
