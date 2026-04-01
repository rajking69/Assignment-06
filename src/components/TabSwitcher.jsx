const TabSwitcher = ({ activeTab, cartCount, onTabChange }) => {
  return (
    <div className="flex justify-center border-y border-gray-200 bg-white py-6">
      <div className="inline-flex gap-2 rounded-full border border-gray-200 bg-white p-1">
        <button
          type="button"
          aria-pressed={activeTab === "products"}
          onClick={() => onTabChange("products")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            activeTab === "products" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Products
        </button>
        <button
          type="button"
          aria-pressed={activeTab === "cart"}
          onClick={() => onTabChange("cart")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            activeTab === "cart" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default TabSwitcher;
