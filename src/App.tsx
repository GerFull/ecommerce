import Header from "./components/Header";
import Products from "./components/Products";

//сделать загрузку с сервера  https://dummyjson.com/products/category/laptops


export default function App() {
  return (
    <div className=" bg-gray-300">
      <Header />
      <Products />
    </div>
  )
}