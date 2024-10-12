import ourStoryImage from '../assets/ourStoryImage.jpg';

function OurStory() {
    return (
        <section className="main about-us" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="container mx-auto px-4">
                <h2 className="text-yellow-300 text-4xl font-bold text-center mb-8">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="about-us-image">
                        <img className="rounded object-cover h-full w-full" src={ourStoryImage} alt="About Us" />
                    </div>
                    <div className="about-us-text">
                        <p className="text-lg text-white mb-4">
                            Welcome to The African House, where we celebrate the vibrant flavors of Africa. Since our establishment in [Year], we have been dedicated to sharing the unique tastes and culture of the African continent with our guests.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Our chefs, hailing from various regions of Africa, expertly craft each dish using authentic recipes and the finest ingredients to bring you a dining experience like no other. From the aromatic spices of Morocco to the bold flavors of Nigeria, our menu offers a diverse selection that caters to all palates.
                        </p>
                        <p className="text-lg text-white mb-4">
                            We pride ourselves on providing not only delicious cuisine but also an inviting atmosphere that transports you to the heart of Africa. Our friendly and knowledgeable staff are always available to guide you through your culinary journey and ensure your visit is memorable.
                        </p>
                        <p className="text-lg text-white mb-4">
                            At The African House, we believe in sustainability and supporting local communities. We source our ingredients from local farmers and suppliers, ensuring that each dish is prepared using fresh, high-quality produce while promoting fair trade practices.
                        </p>
                        <p className="text-lg text-white mb-4">
                            In addition to our commitment to quality, we also strive to provide an unforgettable experience for our guests. We regularly host live music and cultural events, showcasing the rich heritage and artistic talents of the African community.
                        </p>
                        <p className="text-lg text-white mb-4">
                            The African House is more than just a restaurant; it's a place where friends and family can come together to enjoy the best of Africa's culinary offerings in a warm and welcoming environment.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Over the years, we have garnered numerous accolades and awards for our exceptional food and service. We are grateful for the recognition and are continuously inspired to innovate and share the diverse flavors of Africa with the world.
                        </p>
                        <p className="text-lg text-white">
                            Join us at The African House and embark on a flavor safari that you won't soon forget.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;