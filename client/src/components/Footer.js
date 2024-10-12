import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer bg-opacity-90 text-white py-10 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2">Phone: +1 (555) 123-4567</p>
                        <p>Email: info@africanhouse.com</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Location</h3>
                        <p className="mb-2">1234 Main Street</p>
                        <p className="mb-2">New York, NY 10001</p>
                        <p>United States</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                        <p className="mb-2">Mon-Fri: 11:00 am - 10:00 pm</p>
                        <p className="mb-2">Sat: 12:00 pm - 10:00 pm</p>
                        <p>Sun: 12:00 pm - 9:00 pm</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500"><FaTwitter /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-yellow-500"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <hr className="border-t-2 border-white mt-10 mb-4" />
                <div className="text-center">
                    <p className="text-sm mb-4">&copy; {new Date().getFullYear()} The African House. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;