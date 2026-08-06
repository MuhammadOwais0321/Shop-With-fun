import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderConfermation from "./OrderConfermation";
import { Package, MapPin, Zap } from "lucide-react";

const Checkout = (props) => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Har field fill hona chahiye, warna deliveryDetails khaali confirm ho jati hai
    const isAnyFieldEmpty = Object.values(deliveryDetails).some(
      (value) => String(value).trim() === "",
    );
    if (isAnyFieldEmpty) {
      alert("Please fill all delivery fields before confirming the order.");
      return;
    }

    clearCart();
    setIsConfirmed(true);
  };

  if (isConfirmed)
    return <OrderConfermation deliveryDetails={deliveryDetails} />;
  console.log(deliveryDetails);
  
  return (
    <>
      <div className="container mx-auto px-4 pt-8 md:px-8">
        <h2 className="mb-10 text-5xl font-extrabold tracking-tight text-white">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl lg:col-span-2">
            <h3 className="mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4 text-3xl font-bold text-orange-400">
              <MapPin className="size-7 text-orange-500" />
              <span>Shipping Information</span>
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="mb-1 block text-sm font-semibold text-gray-300 capitalize"
                  >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    required
                    onChange={handleChange}
                    value={deliveryDetails[key]}
                    className="mt-1 block w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-3 text-white placeholder-gray-500 shadow-inner"
                  />
                </div>
              ))}

              <div className="pt-6">
                <button
                  type="submit"
                  className="mx-auto flex w-full transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-orange-600 py-4 text-xl font-extrabold tracking-wider text-white uppercase shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-orange-600/50"
                >
                  <span>
                    ₨ PAY AND CONFIRM ORDER (₨ {cartTotal.toFixed(2)} )
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* Order Summery in checkout */}

          <div className="border-1-4 sticky top-20 h-fit rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl lg:col-span-1">
            <h3 className="mb-5 flex items-center space-x-2 border-b border-gray-700 pb-3 text-3xl font-bold text-white">
              <Package className="size-6 text-orange-400" />
              <span>Summary</span>
            </h3>
            <div className="space-y-4 text-gray-400">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-t-gray-800 pb-2 text-base"
                >
                  <span className="truncate text-gray-300"> {item.name}</span>
                  <span className="font-medium text-orange-400">
                    ₨ {(item.price * item.quantity).toFixed(2)}{" "}
                  </span>
                </div>
              ))}

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
                  <span className="text-3xl font-extrabold text-white">
                     Total Due:
                  </span>
                  <span className="text-2xl font-extrabold text-orange-400">
                    ₨ {cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout