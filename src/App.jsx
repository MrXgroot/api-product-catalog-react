import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductPage from "./Pages/ProudctPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import { AppProvider } from "./context/AppContext.jsx";
function App() {
  //right logic for this part

  return (
    <AppProvider>
      <div className="container">
        <Router>
          <div className="navbar-container">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
