import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_handlers/handleGetProduct";

function Category3() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category3" });
    data.then((obj) => {
      setObjData([...obj]);
    });
  });
  return (
    <div>
      {objData.map((item, index) => {
        return <h1 key={index}>{item.data().price}</h1>;
      })}
    </div>
  );
}

export default Category3;
