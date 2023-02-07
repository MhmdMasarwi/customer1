import "./App.css";
// import ProductPage from "./Component/ProductPage";
import HomePage from "./Component/HomePage";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import AddProdect from "./Component/AddProdect";
import Category1 from "./Component/Category1";
import Category2 from "./Component/Category2";
import Category3 from "./Component/Category3";
function HomePage8() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
function AddProductPage() {
  return (
    <div>
      <AddProdect />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/product1" element={<Category1 />} />
        <Route path="/product2" element={<Category2 />} />
        <Route path="/product3" element={<Category3 />} />
      </Routes>
      <Footer />
      {/* <ProductPage/> */}
    </div>
  );
}
export default App;
