import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="overlay hidden">
        <Overlay />
      </div>
    </>
  );
}

export default App;
