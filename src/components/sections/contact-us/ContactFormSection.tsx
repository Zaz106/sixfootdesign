import React, { useState } from "react";
import "./ContactFormSection.css";
import Link from "next/link";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    province: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnquiryType = (type: string) => {
    setFormData({
      ...formData,
      enquiryType: type,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-info">
          <h2>
            You Have Questions,
            <br />
            We Have Answers
          </h2>
          <p className="contact-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>

          <div className="contact-details">
            <div className="contact-column">
              <h3>Get in Touch</h3>
              <p className="location">Wilgeheuwel, JHB</p>
              <p className="phone">+27 84 741 3340</p>
              <p className="email">getintouch@sixfootdesignco.za</p>

              <div className="contact-social-links">
                <Link
                  href="https://www.linkedin.com/company/sixfootdesignco/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://www.instagram.com/sixfootdesignco/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.behance.net/jasonhuisman1#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance
                </Link>
                <Link
                  href="https://za.pinterest.com/sixfootdesignco/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pinterest
                </Link>
                <Link
                  href="https://www.facebook.com/SixFootDesignCo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </Link>
              </div>
            </div>

            <div className="contact-column">
              <h3>Our Services</h3>
              <p>Brand Design</p>
              <p>Advertising</p>
              <p>Illustration</p>
              <p>Web Dev</p>
              <p>Site Management</p>
              <p>Direction and Strategy</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Tell Us What You Need</h3>
            <p className="form-subtitle">
              Our team is ready to assist you with any project, big or small
            </p>

            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="province"
                placeholder="Province"
                value={formData.province}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="full-width"
            />

            <div className="enquiry-type">
              <label>Type of Inquiry</label>
              <div className="enquiry-buttons">
                <button
                  type="button"
                  className={formData.enquiryType === "General" ? "active" : ""}
                  onClick={() => handleEnquiryType("General")}
                >
                  General
                </button>
                <button
                  type="button"
                  className={formData.enquiryType === "Quote" ? "active" : ""}
                  onClick={() => handleEnquiryType("Quote")}
                >
                  Quote
                </button>
                <button
                  type="button"
                  className={formData.enquiryType === "Hosting" ? "active" : ""}
                  onClick={() => handleEnquiryType("Hosting")}
                >
                  Hosting
                </button>
                <button
                  type="button"
                  className={formData.enquiryType === "Other" ? "active" : ""}
                  onClick={() => handleEnquiryType("Other")}
                >
                  Other
                </button>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            />

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
