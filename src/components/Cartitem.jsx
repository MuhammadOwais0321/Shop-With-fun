import { useCart } from "../context/CartContext";
import { X, Minus, Plus } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  const increaseQty = () => addToCart(item);
  const descreaseQty = () => removeFromCart(item.id);
  return (
    <>
      <div className="flex-co l mb-4 flex items-center justify-between rounded-xl border-gray-800 bg-gray-900 p-4 shadow-2xl transition duration-300 hover:border-orange-600/50 sm:grow sm:flex-row sm:p-6">
        <div className="flex w-full items-center space-x-4 sm:w-auto">
          <img
            src={item.image}
            alt={item.name}
            className="size-24 rounded-lg border-2 border-gray-700 object-cover"
          />
          <div className="grow">
            <h3 className="line-clamp-1 text-xl font-bold text-white">
              {item.name}
            </h3>
            <p className="fonse text-lg text-orange-400">
              ₨ {item.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between space-x-4 sm:mt-0 sm:w-2/5 sm:justify-end">
          <div className="flex items-center overflow-hidden rounded-full border border-gray-700 shadow-lg">
            <button
              onClick={descreaseQty}
              className="flex size-8 items-center justify-center bg-gray-800 p-2 text-gray-400 transition duration-150 hover:bg-gray-700"
            >
              <Minus />
            </button>
            <span className="bg-gray-800 px-3 py-1 text-base font-bold text-white">
              {item.quantity}
            </span>
            <button
              onClick={increaseQty}
              className="flex size-8 items-center justify-center bg-gray-800 p-2 text-gray-400 transition duration-150 hover:bg-gray-700"
            >
              <Plus />
            </button>
          </div>
          <p className="hidden w-24 font-extrabold text-orange-300 md:block">
            ₨{(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => removeFromCart(item.id, true)}
            className="rounded-full bg-red-800/20 p-3 text-red-400 transition duration-300 ease-in-out hover:bg-red-800/50"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
