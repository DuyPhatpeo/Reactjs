import React, { useState } from "react";

function App() {
  // const colors = ["#FF0000", "#0000FF", "#FF00FF"];
  // const [color, setColor] = useState("#FF0000");

  // const handleChangeColor = (index) => {
  //   console.log(index);
  //   setColor(colors[index]);
  // };
  const [chosseProduct, setChosseProduct] = useState(1);

  const products = [
    { id: 1, name: "IPhone 13" },
    { id: 2, name: "IPhone 14" },
    { id: 3, name: "IPhone 15" },
  ];

  const handleGetValueCheck = (id) => {
    setChosseProduct(id);
  };
  console.log(chosseProduct);

  return (
    <>
      {/* <div
        style={{
          background: color,
          width: "70px",
          height: "30px",
          marginBottom: "10px",
        }}
      ></div>

      <div>
        <button onClick={() => handleChangeColor(0)}>Red</button>
        <button onClick={() => handleChangeColor(1)}>Blue</button>
        <button onClick={() => handleChangeColor(2)}>Pink</button>
      </div> */}

      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <label>{product.name}</label>
              <input
                type="radio"
                value={product.id}
                onChange={(e) => handleGetValueCheck(e.target.value)}
                checked={+chosseProduct === product.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
