import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
    <NavBar title="Textutils App" about="About" />
      <div className="container my-3" >
        <TextForm heading="Enter the text to capatilze" />
      </div>
      </div>
  );
}

export default App;
