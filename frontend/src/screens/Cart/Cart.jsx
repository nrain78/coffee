import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + (isNaN(price) ? 0 : item.quantity * price);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4"
              >
                {/* Left */}
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-lg object-cover border border-amber-300 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-amber-900">{item.title}</h3>
                    <p className="text-amber-700 font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-amber-600 text-white px-3 rounded hover:bg-amber-500"
                      >
                        −
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="bg-green-500 text-white px-3 rounded hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end w-full sm:w-1/3">
                  <p className="text-gray-800 font-medium text-right">
                    Subtotal: <span className="text-amber-700 font-bold">${(item.quantity * item.price).toFixed(2)}</span>
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="text-right mt-8 border-t pt-6">
              <p className="text-2xl font-bold text-amber-900 mb-3">
                Total: <span className="text-amber-700">${totalPrice.toFixed(2)}</span>
              </p>
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
