import "./App.css";
import Navbar from "./common-components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="p-5 ">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
