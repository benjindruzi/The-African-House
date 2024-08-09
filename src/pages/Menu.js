import { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

function Menu() {
    const [menuItems, setMenuItems] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const token = localStorage.getItem('token');
            
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu-items`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    console.error('Error:', data);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                setMenuItems(groupByCategory(data));
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMenuItems();
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
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-yellow-300 text-4xl text-center mb-8">{category}</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {items.map(item => (
                            <MenuItem key={item.id} id={item.id} name={item.name} description={item.description} price={parseFloat(item.price)}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
