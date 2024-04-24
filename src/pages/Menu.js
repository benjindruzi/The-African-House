import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

function Menu() {
    const [menuData, setMenuData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch('http://localhost:5000/menu-items'); // Adjust as necessary
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMenuData(groupByCategory(data));
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    function groupByCategory(items) {
        return items.reduce((acc, item) => {
            (acc[item.category] = acc[item.category] || []).push(item);
            return acc;
        }, {});
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {Object.entries(menuData).map(([category, items]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-yellow-300 text-4xl text-center mb-8">{category}</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {items.map(item => (
                            <MenuItem key={item.id} name={item.name} description={item.description} price={parseFloat(item.price)} category={item.category} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
