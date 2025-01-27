import React, { useState } from "react";
import { Helmet } from "react-helmet";
import banner from "../../../src/assets/contact/banner.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (e) => {
    setIsVerified(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      alert("Form submitted successfully!");
    } else {
      alert("Please verify that you're not a robot.");
    }
  };

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* Main Banner */}
      <div className="relative w-full h-full mb-10">
        <img
          src={banner}
          alt="Background"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-black/40 p-20 mx-20 text-white rounded-lg">
            <h1 className="uppercase text-4xl font-bold mb-2 font-serif">
              Contact Us
            </h1>
            <p className="text-lg font-mono">Would you like to try a dish?</p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <SectionTitle heading="Our Location" subHeading="Visit Us" />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mb-10">
          {/* Phone Section */}
          <div className="border rounded-lg shadow-md">
            <div className="flex justify-center py-4 bg-yellow-600 text-white text-2xl">
              <PiPhoneCallFill />
            </div>
            <div className="bg-gray-200 text-center mx-5 mb-5 px-10 py-16 rounded-b-lg">
              <h3 className="text-2xl font-semibold uppercase">Phone</h3>
              <p className="text-lg pt-1">+88-01234567890</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="border rounded-lg shadow-md">
            <div className="flex justify-center py-4 bg-yellow-600 text-white text-2xl">
              <FaLocationDot />
            </div>
            <div className="bg-gray-200 text-center mx-5 mb-5 px-10 py-16 rounded-b-lg">
              <h3 className="text-2xl font-semibold uppercase">Address</h3>
              <p className="text-lg pt-1">123 Bistro Street, Food City</p>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="border rounded-lg shadow-md">
            <div className="flex justify-center py-4 bg-yellow-600 text-white text-2xl">
              <FaClock />
            </div>
            <div className="bg-gray-200 text-center mx-5 mb-5 px-10 py-14 rounded-b-lg">
              <h3 className="text-2xl font-semibold uppercase">
                Working Hours
              </h3>
              <p className="text-gray-500">Mon - Fri: 08:00 - 20:00</p>
              <p className="text-gray-500">Sat - Sun: 10:00 - 24:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <SectionTitle heading="Contact Form" subHeading="Send Us a Message" />
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-100 shadow-lg mb-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered bg-white w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-white w-full"
                required
              />
            </div>

            {/* Row 2: Phone */}
            <input
              type="tel"
              placeholder="Phone"
              className="input input-bordered bg-white w-full"
              required
            />

            {/* Row 3: Message */}
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered bg-white w-full"
              rows="4"
              required
            ></textarea>

            {/* Row 4: CAPTCHA */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="captcha"
                onChange={handleCaptchaChange}
                className="checkbox checkbox-primary"
              />
              <label htmlFor="captcha" className="text-sm">
                I'm not a robot
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn w-full ${
                isVerified
                  ? "bg-yellow-700 hover:bg-yellow-800"
                  : "bg-gray-300"
              } text-white`}
              disabled={!isVerified}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
