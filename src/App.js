import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
import ContextProvider from "./context/ContextProvider";
import "./style.css";
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Main />
      <Overlay />
    </ContextProvider>
  );
}

export default App;
