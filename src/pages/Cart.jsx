import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import CartItem from "../components/Cartitem";

const Cart = (props) => {
  const { cart, cartTotal, cartCount } = useCart();
  return (
    <>
      <div className="container mx-auto px-4 pt-8 md:px-8">
        <div className="mb-10 flex items-center">
          <Link
            to="/"
            className="flex items-center text-lg font-semibold text-gray-400 transition duration-150 hover:text-orange-400"
          >
            <ChevronLeft className="mr-1 size-6" />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className="mb-10 text-4xl font-extrabold tracking-tight text-white">
          Shopping Cart ({cartCount})
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="border-1-4 sticky top-20 h-fit rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl lg:col-span-1">
            <h3 className="mb-5 flex items-center space-x-2 border-b border-gray-700 pb-3 text-3xl font-bold text-white">
              <div className="flex gap-2">
                <span className="size-6 text-orange-400">₨</span>
                <span>Order Total</span>
              </div>
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold text-white">
                  ₨ {cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between border-t border-gray-700 pt-6">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total :
                </span>
                <span className="text-2xl font-extrabold text-orange-400">
                  ₨ {cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <Link
              to={"/checkout"}
              className="mx-auto mt-8 flex w-full transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-orange-600 py-4 text-xl font-extrabold tracking-wider text-white uppercase shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-orange-600/50"
            >
              <Zap className="size-6" />
              <span>Proceed Securely</span>
            </Link>
            <p className="mt-4 text-center text-xs text-gray-500">
              All transactions are excrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
