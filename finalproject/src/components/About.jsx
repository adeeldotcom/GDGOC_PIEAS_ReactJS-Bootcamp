import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">About FitZone</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At FitZone, we're dedicated to helping you achieve your fitness goals in a supportive and motivating environment. 
              Our state-of-the-art facilities and expert trainers are here to guide you on your journey to a healthier, 
              stronger you.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Facilities</h3>
            <p className="text-gray-700 leading-relaxed">
              FitZone offers a wide range of modern equipment, spacious workout areas, and specialized studios for group classes. 
              From cardio machines to free weights, and from yoga to high-intensity interval training, we have everything you 
              need to diversify your workout routine and stay motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
