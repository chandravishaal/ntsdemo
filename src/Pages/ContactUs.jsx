import React, { useState } from "react";

const ContactUs = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically set the state based on the input's name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    })
  };

  return (
    <section className="md:pt-20 lg:py-10 md:ml-10">
      <div className="container mx-auto mb-20 flex flex-col justify-between gap-5">
        {/* form here */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-6">
            <div className="my-8 mx-12">
              <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
              <p className="mb-6">
                We're here to help. Chat to our friendly team 24/7
                <br /> and get set up in just 5 minutes.
              </p>
              {/* Contact Info */}
              <div className="flex flex-col mb-4">
                <a
                  href="mailto:email@company.com"
                  className="text-primaryCyan mb-2"
                >
                  <i className="ri-send-plane-fill"></i> Shoot us an email
                </a>
                <a href="https://twitter.com" className="text-primaryCyan">
                  <i className="ri-twitter-fill"></i> Message us on Twitter
                </a>
              </div>

              {/* contact Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-1/2 border border-gray-300 rounded p-2"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-1/2 border border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded p-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primaryCyan text-white p-2 rounded"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* map here */}
          <div className="w-full lg:w-1/2 p-6 max-md:hidden">
            <div className="relative h-full w-full">
              {/* Use your Google Maps embed URL here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.7974488000145!2d88.39509935838976!3d22.594249812147055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779d39d19c5f%3A0xa7a3c8ef1f4d6993!2sBlob%20CoWorking%20Space!5e0!3m2!1sen!2sin!4v1727431142947!5m2!1sen!2sin"
                width="600"
                height="450"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
