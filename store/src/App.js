import "./App.css";
import ProductPage from "./Component/ProductPage";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return <div>this is home Page</div>;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      {/* <ProductPage/> */}
    </div>
  );
}

export default App;
