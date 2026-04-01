import { iconEmojiMap } from "../constants/productMeta";

const CartSection = ({ carts, total, onRemove, onCheckout }) => {
  return (
    <div className="bg-white px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Cart</h2>

        {carts.length === 0 ? (
          <p className="py-10 text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="mb-6 space-y-4">
              {carts.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-xl">
                      {iconEmojiMap[item.icon] || "🔧"}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-sm font-semibold text-red-500 transition hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">Total:</p>
                <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
              </div>

              <button
                onClick={onCheckout}
                className="w-full rounded-full bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSection;
