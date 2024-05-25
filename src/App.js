import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout.js";
import Home from "./pages/Home.js";

import About from "./pages/About.js";
import Error from "./pages/Error.js";
import SingleProduct from "./pages/SingleProduct.js";
import Products from "./pages/Products.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
