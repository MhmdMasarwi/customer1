import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_handlers/handleGetProduct";

function Category2() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category2" });
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

export default Category2;
