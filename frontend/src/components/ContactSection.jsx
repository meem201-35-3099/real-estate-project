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
              With over 15 years of real estate and IT experiences, we provide
              home buyers and sellers with professional, responsive and
              attentive estate services in Northern Virginia. Let us help you
              find the property that fits your needs, and guide you through the
              buying process. We will make finding the right home for you our
              highest priority. Buy with confidence knowing that you are getting
              the right house at the right price. 
              
              We provide a complete suite of
              services to ensure your home sells quickly and at the best price.
              We can’t wait to get started.
            </p>
            <h3 className="mt-10 text-xl text-white font-semibold">
              Our Information
            </h3>
            <ul className="mt-5 space-y-2 text-white">
              <li>
                <i className="fa-solid fa-phone"></i>{" "}
                <a href="tel:3475527174" className="hover:underline">
                  347.552.7174
                </a>
              </li>

              <li>
                <i className="fa-solid fa-envelope"></i>{" "}
                <a
                  href="mailto:dmvbestrealtor@gmail.com"
                  className="hover:underline"
                >
                  dmvbestrealtor@gmail.com
                </a>
              </li>

              <li>
                <i className="fa-solid fa-earth-americas contact-icon"></i>{" "}
                <a href="#" className="hover:underline">
                  https://dmvbestrealtor.com
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
