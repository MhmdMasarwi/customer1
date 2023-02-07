import "./App.css";
import ProductPage from "./Component/ProductPage";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import AddProdect from "./Component/AddProdect";
import Viewitem from "./Component/Viewitem";
function HomePage() {
  return <div>this is home Page</div>;
}
function ViewitemPage() {
  return <div><Viewitem/></div>;
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
        <Route path="/ViewitemPage" element={<ViewitemPage />} />
        <Route path="/addProduct" element={<AddProductPage />} />
      </Routes>
      <Footer />
      {/* <ProductPage/> */}
    </div>
  );
}

export default App;
