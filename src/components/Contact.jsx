import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage the notification visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(true); // Show the notification
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the notification after 3 seconds
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto mt-10">
      {isSubmitted && (
        <div className="bg-green-500 text-white text-center p-2 rounded mb-4 transition duration-300">
          Thank you for your message!
        </div>
      )}
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <p className="mb-6 text-center">
        Feel free to reach out with any questions or comments. I look forward to hearing from you!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-12 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-12 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full h-32 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          />
        </div>
        
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
