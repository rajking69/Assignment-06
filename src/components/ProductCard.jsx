import { iconEmojiMap, periodLabel, tagClassMap, tagLabelMap } from "../constants/productMeta";

const ProductCard = ({ item, carts, onBuy }) => {
  const isInCart = carts.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <span
        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
          tagClassMap[item.tagType] || "bg-gray-100 text-gray-500"
        }`}
      >
        {tagLabelMap[item.tagType] || item.tag}
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
        {iconEmojiMap[item.icon] || "🔧"}
      </div>

      <div>
        <h2 className="mb-1 text-lg font-bold text-gray-900">{item.name}</h2>
        <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
      </div>

      <div className="text-2xl font-bold text-gray-900">
        ${item.price}
        <span className="ml-1 text-sm font-normal text-gray-400">/{periodLabel[item.period]}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {item.features.map((feature) => (
          <li key={`${item.id}-${feature}`} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-bold text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={`Buy ${item.name}`}
        onClick={() => onBuy(item, isInCart)}
        className={`mt-auto flex w-full cursor-pointer items-center justify-center rounded-full py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg ${
          isInCart
            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            : "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
        }`}
      >
        {isInCart ? "✓ Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
