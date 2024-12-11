import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can expand this)
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="h-screen ">
      <div className=" bg-black/90 h-screen py-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Us Section */}
          <div>
            <h2 className="text-3xl text-white font-bold">About Us</h2>
            <p className="mt-5 text-white text-justify">
              The real estate landscape is changing. The internet is now the
              primary tool for buying and selling your home. The team at Sewell
              Realty Group embraces this change. We leverage our real estate
              experience and the power of the internet and social media to make
              your real estate experience a success. Simply stated, we will save
              you money and provide you with the best marketing and
              representation in the business.
            </p>
            <h3 className="mt-10 text-xl text-white font-semibold">
              Our Information
            </h3>
            <ul className="mt-5 space-y-2 text-white">
              <li>
                <i className="fa-solid fa-phone"></i>{" "}
                <a href="tel:9199613789" className="hover:underline">
                  919.961.3789
                </a>
              </li>

              <li>
                <i className="fa-solid fa-envelope"></i>{" "}
                <a
                  href="mailto:info@landmarkrealtygroup.com"
                  className="hover:underline"
                >
                  info@landmarkrealtygroup.com
                </a>
              </li>

              <li>
                <i className="fa-solid fa-earth-americas contact-icon"></i>
                <a href="#" className="hover:underline">
                  landmarkrealtygroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl text-white font-bold">Contact Us</h2>
            <form
              onSubmit={handleSubmit}
              className="mt-5 p-5 rounded shadow-md space-y-4"
            >
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 outline-white rounded hover:bg-cyanBlue"
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 outline-white rounded hover:bg-cyanBlue"
              />
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                className="w-full p-3 border border-gray-300 rounded outline-white hover:bg-cyanBlue"
              />
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 outline-white rounded hover:bg-cyanBlue"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="bg-secondary text-white py-2 px-4 rounded hover:bg-tertiary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
