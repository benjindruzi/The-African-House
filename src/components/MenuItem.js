function MenuItem({ name, description, price }) {
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    return (
        <div className="main menu-item shadow-md rounded-xl hover:shadow-lg transition-shadow p-6">
            <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
            <p className="text-white text-sm mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-white text-lg font-semibold text-blue-gray-900">{formatPrice(price)}</span>
                <button className="text-xs uppercase py-3 px-6 bg-yellow-300 font-bold shadow-md hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                    Add to Cart
                </button>
            </div>
        </div>
    );
    // bg-yellow-300 font-bold hover:bg-yellow-600
}

export default MenuItem;
