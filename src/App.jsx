import { Product } from "./pages/Product/Product";
import { ProductList } from "./pages/ProductList/ProductList";
import { Landing } from "./pages/Landing/Landing";
import { Cart } from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { ShopLayout } from "./layouts/ShopLayout";

function App() {
  return (
    <Routes>
      <Route element={<ShopLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
