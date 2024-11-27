import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
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
          <Table />
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
