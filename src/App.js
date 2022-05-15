import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Overlay from "./components/Overlay";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ContextProvider from "./context/ContextProvider";
import "./style.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Overlay />
              </>
            }
          />
          <Route
            path="/collections"
            element={
              <>
                <Main />
                <Overlay />
              </>
            }
          />
          <Route
            path="/men"
            element={
              <>
                <Main />
                <Overlay />
              </>
            }
          />
          <Route
            path="/women"
            element={
              <>
                <Main />
                <Overlay />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
