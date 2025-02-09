import React, { useState } from "react";

function App() {
  const [chooseProduct, setChooseProduct] = useState([]);

  const products = [
    { id: 1, name: "IPhone 13" },
    { id: 2, name: "IPhone 14" },
    { id: 3, name: "IPhone 15" },
  ];

  const handleGetValueCheck = (id) => {
    if (!chooseProduct.includes(+id)) {
      setChooseProduct((prev) => [...prev, +id]);
    } else {
      setChooseProduct((prev) => prev.filter((idProduct) => idProduct !== +id));
    }
  };

  console.log(chooseProduct);

  return (
    <>
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <label>{product.name}</label>
              <input
                type="checkbox"
                value={product.id}
                onChange={(e) => handleGetValueCheck(e.target.value)}
                checked={chooseProduct.includes(product.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
