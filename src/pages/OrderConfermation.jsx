import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfermation = ({ deliveryDetails }) => {
  console.log(deliveryDetails);

  return (
    <>
      <div className="container mx-auto pt-12 md:px-8">
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-green-700 bg-gray-900 p-12 text-center text-white shadow-2xl">
          <CheckCircle className="mx-auto mb-6 size-24 text-green-500 drop-shadow-lg" />
          <h2 className="mb-4 text-4xl font-extrabold text-white">
            Order Confirmed!
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Your Transaction is complete. A confirmation email has been sent to
            your account.
          </p>
          <div className="inline-block rounded-xl border border-green-700 bg-green-900/30 p-6 text-left font-mono text-sm text-gray-300">
            <p className="mb-1 text-lg font-semibold">
              {deliveryDetails?.name}
            </p>
            <p>{deliveryDetails?.address}</p>
            <p>{deliveryDetails?.city}</p>
            <p>{deliveryDetails?.zip}</p>
          </div>
          <Link
            to={"/"}
            className="mx-auto mt-10 flex w-max transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-orange-600 px-8 py-4 font-extrabold tracking-wider text-white uppercase shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-orange-600/50"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderConfermation;
