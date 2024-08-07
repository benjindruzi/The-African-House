import { useCart } from '../contexts/CartContext';

function MenuItem({ id, name, description, price, showToast }) {
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = {
            id: id,
            name: name,
            price: price,
        };

        addToCart(item);
    };

    return (
        <div className="main menu-item">
            <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
            <p className="text-white text-sm mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-white text-lg font-semibold text-blue-gray-900">{formatPrice(price)}</span>
                <button onClick={handleAddToCart} className="text-xs uppercase py-3 px-6 bg-yellow-300 font-bold shadow-md hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default MenuItem;
