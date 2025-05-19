import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., sending data to an API
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-4 text-lg"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full p-4 text-lg"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full p-4 text-lg"
            placeholder="Write your message"
            rows="6"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-6 py-3 text-lg">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
