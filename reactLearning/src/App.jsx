import Courses from "./components/Course";
import MyFooter from "./components/Footer";
import MyHeader from "./components/Header";
import Product from "./components/Product";

function App() {
  const listProducts = [
    {
      url: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-3.jpg",
      title: "SHOPEE PREMIUM",
      price: 1000,
    },
    {
      url: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-3.jpg",
      title: "THƯƠNG HIỆU QUỐC TẾ",
      price: 1200,
    },
    {
      url: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-3.jpg",
      title: "SHOPEE BOOK CLUB",
      price: 1300,
    },
    {
      url: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-3.jpg",
      title: "BRAND MEMBERSHIP",
      price: 1400,
    },
  ];
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {listProducts.map((product, index) => {
        return (
          <Product
            title={product.title}
            url={product.url}
            price={product.price}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
