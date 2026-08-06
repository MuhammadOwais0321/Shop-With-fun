import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/Product";
import { ChevronLeft, ShoppingCart, Tag, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find((data) => String(id) === String(data.id)));
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto my-8 p-6 text-center text-white">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto my-8 min-h-screen rounded-2xl border border-gray-800 bg-gray-900 p-6 px-4 shadow-2xl md:p-12 md:px-8">
        <Link to={"/"}>
          <button className="mb-12 flex cursor-pointer items-center text-lg font-semibold text-gray-400 transition duration-150 hover:text-orange-400">
            <ChevronLeft className="mr-1 size-6" />
            <span>Back to All Products</span>
          </button>
        </Link>
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
          <div className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-100 w-100 rounded-2xl border-4 border-gray-800 object-cover shadow-2xl shadow-gray-950/50"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tighter text-white">
                {product.name}
              </h1>
            </div>
            <p className="mb-4 text-3xl font-extrabold text-orange-400">
              ₨{product.price.toFixed(2)}
            </p>
            <h2 className="mb-2 flex items-center space-x-2 border-b border-orange-900/50 pb-2 text-xl font-bold text-gray-200">
              <Tag className="size-5 text-orange-500" />
              <span>Product Overview</span>
            </h2>
            <p className="mb-3 text-lg leading-relaxed text-gray-500">
              {product.description}
            </p>

            <ul className="space-y-3 rounded-xl border border-gray-700 bg-gray-800 p-4 text-gray-300">
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="flex size-5 shrink text-orange-500" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="flex size-5 shrink text-orange-500" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="flex size-5 shrink text-orange-500" />
                <span>Immediate Shipping for in-Stock Items</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-col items-center justify-center space-y-4 text-lg">
              <button 
              onClick={()=>addToCart(product)}
              className="mx-auto flex w-full transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-orange-600 py-3 font-bold tracking-wider text-white uppercase shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-orange-600/50">
                <ShoppingCart className="size-6" />
                <span>Add to Cart</span>
              </button>
              <Link
                to={"/"}
                className="mx-auto flex w-full transform cursor-pointer items-center justify-center space-x-2 rounded-full border-2 border-orange-600 bg-transparent py-3 font-bold tracking-wider text-orange-400 uppercase transition duration-300 hover:bg-orange-900/50"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
