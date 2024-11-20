import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <Navbar />
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="callTab" className="tab" aria-label="Calls" />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Table />
        </div>
        <input type="radio" name="putTab" className="tab" aria-label="Puts" />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Table />
        </div>
      </div>
      <div className="flex justify-evenly">
        <button className="bg-primary rounded-md p-4">Buy</button>
      </div>
    </>
  );
};

export default App;
