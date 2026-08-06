import { Home, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = (props) => {
  const { cartCount } = useCart();
  return (
    <>
      <header className="shadow-gray-95/70 sticky top-0 z-10 border-b border-orange-900 bg-gray-950/95 text-white shadow-2xl backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to={"/"}>
            <div className="flex cursor-pointer items-center space-x-3">
              <Home className="size-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase">
                WDM<span className="text-orange-400">STORE</span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to={"/cart"}
              className="relative cursor-pointer rounded-xl border border-orange-400/50 bg-orange-500/10 p-3 shadow-lg transition duration-200 hover:bg-orange-500/20"
            >
              <ShoppingCart className="size-6 text-orange-400" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex translate-x-1/2 transform items-center justify-center px-2 py-1 text-xs leading-none font-bold text-white -translate-y-1/2 bg-red-600 rounded-full min-w-6">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
  F;
};

export default Navbar;
