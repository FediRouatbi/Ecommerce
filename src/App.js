import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Main />
      <div className="overlay hidden">
        <Overlay />
      </div>
    </ContextProvider>
  );
}

export default App;
