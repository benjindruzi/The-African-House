import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import Testimonials from '../components/Testimonials';

function Home() {
    return (
        <div>
            <Hero />
            <FeaturedDishes />
            <Testimonials />
        </div>
    );
}

export default Home;