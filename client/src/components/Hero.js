import heroImage from '../assets/heroImage.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    function goToMenu() {
        navigate('/menu');
    }

    return (
        <section className="main hero" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="flex h-screen mb-10 items-center">
                <div className="flex flex-col justify-center items-start w-1/2">
                    <p className="text-white font-bold">Chase the African flavors</p>
                    <hr className="w-3 my-2 border-t-2 my-4 border-white" />
                    <h1 className="font-cormorant-upright text-yellow-300 text-7xl font-bold-400 mb-4">Welcome to</h1>
                    <h1 className="font-cormorant-upright text-yellow-300 text-7xl font-bold-400 mb-4">The African House</h1>
                    <p className="text-white w-3/4 text-md mb-6">
                        Embark on a flavorful Safari: Savor the spirit of Africa 
                        and discover the rich, exotic tastes of our authentic, 
                        home-cooked delicacies from across the continent.
                    </p>
                    <button onClick={goToMenu} className="bg-yellow-300 font-bold hover:bg-yellow-600 py-2 px-5">
                        Order Now
                    </button>
                </div>
                <div className="flex justify-end items-center">
                    <img className="h-5/6 w-3/5 object-cover rounded" src={heroImage} alt="food"></img>
                </div>
            </div>
        </section>
    );
}

export default Hero;