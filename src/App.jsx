import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import productsData from "./data/products.json";
import CartSection from "./components/CartSection";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ProductIntro from "./components/ProductIntro";
import ProductsSection from "./components/ProductsSection";
import StepsSection from "./components/StepsSection";
import TabSwitcher from "./components/TabSwitcher";

const App = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  const total = carts.reduce((sum, item) => sum + item.price, 0);

  const handleBuy = (item, isInCart) => {
    if (isInCart) {
      toast.error(`${item.name} is already in your cart!`);
      return;
    }

    setCarts((prev) => [...prev, item]);
    toast.success(`${item.name} added to cart!`);
  };

  const handleRemove = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout successful! Cart is now empty.", { position: "top-center" });
  };

  return (
    <div className="page-canvas">
      <Navbar cartCount={carts.length} />
      <HeroSection />
      <ProductIntro />
      <TabSwitcher activeTab={activeTab} cartCount={carts.length} onTabChange={setActiveTab} />

      {activeTab === "products" && (
        <ProductsSection products={productsData} carts={carts} onBuy={handleBuy} />
      )}

      {activeTab === "cart" && (
        <CartSection carts={carts} total={total} onRemove={handleRemove} onCheckout={handleCheckout} />
      )}

      <StepsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
      <ToastContainer />
    </div>
  );
};

export default App;
