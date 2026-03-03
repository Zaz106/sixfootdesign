"use client";

import React, { useState, useEffect } from "react";
import "./ContactFormSection.css";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
type PopupState = "success" | "error" | "rate-limited" | null;

// ─── Popup Modal ─────────────────────────────────────────────────────────────
const SubmitPopup = ({
  state,
  onClose,
}: {
  state: PopupState;
  onClose: () => void;
}) => {
  if (!state) return null;

  const isSuccess = state === "success";
  const isRateLimited = state === "rate-limited";

  const iconPath = isSuccess
    ? "M5 13l4 4L19 7"
    : isRateLimited
      ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      : "M6 18L18 6M6 6l12 12";

  const modalClass = isSuccess
    ? "popup-success"
    : isRateLimited
      ? "popup-rate-limited"
      : "popup-error";

  const title = isSuccess
    ? "Message Sent!"
    : isRateLimited
      ? "Too Many Attempts"
      : "Something Went Wrong";

  const message = isSuccess
    ? "Thanks for reaching out! We'll be in touch with you shortly."
    : isRateLimited
      ? "You've submitted a few times in a short period. Please wait a few minutes and try again."
      : "We couldn't send your message. Please try again or email us directly at getintouch@sixfootdesignco.co.za";

  const btnLabel = isSuccess ? "Great, thanks!" : "Close";

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className={`popup-modal ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <div className="popup-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <h3 id="popup-title" className="popup-title">
          {title}
        </h3>
        <p className="popup-message">{message}</p>
        <button className="popup-close-btn" onClick={onClose}>
          {btnLabel}
        </button>
      </div>
    </div>
  );
};

// ─── Contact Form ─────────────────────────────────────────────────────────────
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    province: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
    hp_field: "", // Honeypot field
  });

  const [loadTimestamp, setLoadTimestamp] = useState<number>(0);

  useEffect(() => {
    setLoadTimestamp(Date.now());
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState<PopupState>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnquiryType = (type: string) => {
    setFormData({ ...formData, enquiryType: type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPopup(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, loadTimestamp }),
      });

      if (res.ok) {
        setPopup("success");
        setFormData({
          firstName: "",
          lastName: "",
          province: "",
          phone: "",
          email: "",
          enquiryType: "",
          message: "",
          hp_field: "",
        });
      } else if (res.status === 429) {
        setPopup("rate-limited");
      } else {
        setPopup("error");
      }
    } catch {
      setPopup("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ─── Popup ─── */}
      <SubmitPopup state={popup} onClose={() => setPopup(null)} />

      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-info">
            <h2>
              You Have Questions,
              <br />
              We Have Answers
            </h2>
            <p className="contact-info-text">
              You’ve got questions. We’ve got the answers. Shoot us an email and
              let’s start the conversation.
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
                  maxLength={60}
                  disabled={isLoading}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  maxLength={60}
                  disabled={isLoading}
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
                  maxLength={80}
                  disabled={isLoading}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={30}
                  disabled={isLoading}
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
                maxLength={254}
                disabled={isLoading}
              />

              <div className="enquiry-type">
                <label>Type of Inquiry</label>
                <div className="enquiry-buttons">
                  {["General", "Quote", "Hosting", "Other"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={formData.enquiryType === type ? "active" : ""}
                      onClick={() => handleEnquiryType(type)}
                      disabled={isLoading}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="message-field-wrapper">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  maxLength={2000}
                  disabled={isLoading}
                />
                <p className="char-counter">{formData.message.length} / 2000</p>
              </div>

              {/* Honeypot field - hidden from users */}
              <div style={{ display: "none" }} aria-hidden="true">
                <input
                  type="text"
                  name="hp_field"
                  value={formData.hp_field}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading || !formData.enquiryType}
              >
                {isLoading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
