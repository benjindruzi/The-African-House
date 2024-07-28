import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

function CartModal({ isOpen, onClose }) {
    const { cart, removeFromCart, clearCart } = useCart();
    const { user } = useAuth();

    if (!isOpen) return;

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleCheckout = async () => {
        if (!user) {
            alert('Please login to checkout');
        }

        console.log('THE USER IS: ', user);

        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    user_id: user.id,
                    total: totalPrice,
                    items: cart
                })
            });

            if (!response.ok){
                console.error('Error data:', await response.json());
                throw new Error('Failed to create order');
            }

            alert('Order placed successfully');
            clearCart();
            onClose();
        } catch (error) {
            console.error(error);
            alert('Checkout failed');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-lg w-2/3 text-white">
                <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">Your Cart</h2>
                {cart.length === 0 ? (
                    <p className="text-white text-center">Your cart is empty.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left text-yellow-300">Item</th>
                                    <th className="px-4 py-2 text-right text-yellow-300">Price</th>
                                    <th className="px-4 py-2 text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">{item.name}</td>
                                        <td className="px-4 py-2 text-right">${item.price.toFixed(2)}</td>
                                        <td className="px-4 py-2 text-right">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                                aria-label={`Remove ${item.name} from cart`}
                                            >
                                                &times;
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="px-4 py-2 font-bold">Total</td>
                                    <td className="px-4 py-2 text-right font-bold">${totalPrice.toFixed(2)}</td>
                                    <td className="px-4 py-2"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
                <div className="flex justify-between mt-6">
                    <button onClick={onClose} className="text-red-500 hover:text-red-700" type="button">
                        Cancel
                    </button>
                    <button onClick={handleCheckout} className="bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded shadow-md hover:bg-yellow-500 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" type="button">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartModal;
