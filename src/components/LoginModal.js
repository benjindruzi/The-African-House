import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [isFormValid, setIsFormValid] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        const isValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
            password.length > 0;

        setIsFormValid(isValid);
    }, [email, password]);

    if (!isOpen) return null;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            
            const data = await response.json();

            if (!response.ok) {
                console.error('Login failed: ', data);
                showToast(data, 'error');
                return;
            }

            console.log('Login successful: ', data);
            login(data.token, data.user);
            showToast('Login successful!', 'success');
            onClose();
        } catch (error) {
            console.error('Error:', error);
            showToast('An error occurred. Please try again.', 'error');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center text-white">
            <div className="p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your email" value={email} onChange={(event) => {setEmail(event.target.value)}} />
                        {email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && <span className="text-red-500">Please enter a valid email</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" value={password} onChange={(event) => {setPassword(event.target.value)}} />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${isFormValid ? 'bg-yellow-300 hover:bg-yellow-600 text-black' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`} type="submit" disabled={!isFormValid}>
                            Login
                        </button>
                        <button className="text-red-500 hover:text-red-700" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;
