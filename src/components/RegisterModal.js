import { useState } from 'react';

function RegisterModal({ isOpen, onClose }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    if (!isOpen) return;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error('Registration failed: ', data);
                return;
            }
            
            console.log('Registration successful');
            onClose();
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center text-white">
            <div className="p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="confirm-password" placeholder="Confirm your password" value={confirmationPassword} onChange={(event) => setConfirmationPassword(event.target.value)} />
                    </div>
                    {password !== confirmationPassword && <span className="text-red-500">Passwords do not match</span>}
                    <div className="flex items-center justify-between">
                        <button className="bg-yellow-300 font-bold hover:bg-yellow-600 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        <button onClick={onClose} className="text-red-500 hover:text-red-700" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );    
};

export default RegisterModal;
