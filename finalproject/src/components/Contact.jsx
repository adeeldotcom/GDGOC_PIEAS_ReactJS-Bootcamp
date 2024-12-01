import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Membership inquiry submitted with email:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="bg-blue-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Join FitZone Today</h2>
        <div className="max-w-2xl mx-auto bg-blue-800 p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300 text-lg font-semibold">
              Request Membership Info
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="mb-2">For immediate assistance, call us at: (123) 456-7890</p>
            <p>Address: 123 Fitness Street, Healthy City, HC 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
