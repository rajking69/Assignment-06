import ProductCard from "./ProductCard";

const ProductsSection = ({ products, carts, onBuy }) => {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl rounded-2xl border-2 border-dashed border-gray-200 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} carts={carts} onBuy={onBuy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
