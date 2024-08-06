import { useState, useEffect } from 'react';
import { useToast } from '../contexts/ToastContext';

function RegisterModal({ isOpen, onClose }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        const isValid =
            username.length >= 3 &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
            /\d/.test(password) &&
            password.length >= 8 &&
            password === confirmationPassword;

        setIsFormValid(isValid);
    }, [username, email, password, confirmationPassword]);

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
                showToast(data, 'error');
                return;
            }

            console.log('Registration successful');
            showToast('Registration successful', 'success');
            onClose();
        } catch (error) {
            console.error('Error: ', error);
            showToast('An error occurred. Please try again.', 'error');
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
                        {username.length > 0 && username.length < 3 && <span className="text-red-500">Must be at least 3 characters long</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        {email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                            <div>
                                <span className="text-red-500">Please enter a valid email</span>
                                <br />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        {password.length > 0 && !/[!@#$%^&*(),.?":{}|<>]/.test(password) && (
                            <div>
                                <span className="text-red-500">Must contain at least one special character</span>
                                <br />
                            </div>
                            )}
                            {password.length > 0 && !/\d/.test(password) && (
                            <div>
                                <span className="text-red-500">Must contain at least one digit</span>
                                <br />
                            </div>
                            )}
                            {password.length > 0 && password.length < 8 && (
                            <div>
                                <span className="text-red-500">Must be at least 8 characters long</span>
                                <br />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="confirmationPassword">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmationPassword" type="password" placeholder="Confirm your password" value={confirmationPassword} onChange={(event) => setConfirmationPassword(event.target.value)} />
                        {password !== confirmationPassword && <span className="text-red-500">Passwords do not match</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${isFormValid ? 'bg-yellow-300 hover:bg-yellow-600 text-black' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`} type="submit" disabled={!isFormValid}>
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
