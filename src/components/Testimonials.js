import React from 'react';

function Testimonials() {
    return (
        <section className="main testimonials" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-yellow-300 text-4xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial-card rounded overflow-hidden shadow-lg p-6 bg-opacity-90 bg-gray-800 text-white">
                            <p className="text-base mb-4">{testimonial.content}</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src={testimonial.avatar} alt="Avatar" />
                                <div>
                                    <p className="font-bold text-lg">{testimonial.name}</p>
                                    <p className="text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const testimonialsData = [
    {
        content: 'The African House offers the best African cuisine I have ever tasted. The atmosphere is warm and welcoming, and the staff are extremely friendly. I highly recommend this place.',
        name: 'John Doe',
        location: 'New York, USA',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        content: 'I was blown away by the delicious food and the excellent service. The African House has quickly become my favorite place to dine.',
        name: 'Jane Smith',
        location: 'Los Angeles, USA',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        content: 'The African House is a true gem! The dishes are authentic, flavorful, and beautifully presented. I cannot wait to come back for more!',
        name: 'Michael Johnson',
        location: 'Chicago, USA',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        content: 'I have traveled extensively throughout Africa, and The African House brings back wonderful memories of the delicious food I enjoyed on my trips. A must-visit for anyone who loves African cuisine!',
        name: 'Samantha Williams',
        location: 'Houston, USA',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        content: 'The African House never disappoints! The staff is always welcoming and attentive, and the food is consistently amazing. Highly recommended for a unique dining experience.',
        name: 'James Brown',
        location: 'Philadelphia, USA',
        avatar: 'https://via.placeholder.com/150',
    },
    {
        content: 'Every time I visit The African House, I am blown away by the quality and creativity of the dishes. The service is top-notch, and the atmosphere is perfect for a night out with friends or a romantic dinner.',
        name: 'Emily Davis',
        location: 'Phoenix, USA',
        avatar: 'https://via.placeholder.com/150',
    },
];

export default Testimonials;
