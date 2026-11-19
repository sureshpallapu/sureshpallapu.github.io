
import React, { useEffect, useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Code2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import { portfolioData } from "../data/portfolio";
import "./Contact.css";

const RECEIVER_EMAIL = "pallapusuresh2000@gmail.com";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const contact = portfolioData.contact || {};
  const social = portfolioData.social || {};
  const personal = portfolioData.personal || {};

  const [formData, setFormData] = useState(initialFormData);

  const [formStatus, setFormStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const email = contact.email || personal.email || RECEIVER_EMAIL;
  const phone = personal.phone || "";
  const location = contact.location || personal.location || "India";

  // Detect successful return from FormSubmit.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("contact") === "success") {
      setFormStatus("success");
      setFeedback(
        "Your message has been delivered successfully. Thank you for contacting me!"
      );

      // Clean the success parameter from the URL.
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${window.location.hash}`
      );
    }
  }, []);

  // Redirect back to the same portfolio after successful submission.
  const returnUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?contact=success#contact`
      : "https://sureshpallapu.github.io/?contact=success#contact";

  // Social profiles.

const socialLinks = [
  {
    name: "GitHub",
    url: social.github,
    icon: FaGithub,
    className: "github",
  },
  {
    name: "LinkedIn",
    url: social.linkedin,
    icon: FaLinkedinIn,
    className: "linkedin",
  },
  {
    name: "Instagram",
    url: social.instagram,
    icon: FaInstagram,
    className: "instagram",
  },
  {
    name: "YouTube",
    url: social.youtube,
    icon: FaYoutube,
    className: "youtube",
  },
].filter((item) => item.url && item.url.trim() !== "");


  // Update controlled form fields.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formStatus === "error" || formStatus === "success") {
      setFormStatus("idle");
      setFeedback("");
    }
  };

  // Native POST submission: intentionally no preventDefault().

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

setFormStatus("sending");
setFeedback("Sending your message. Please wait...");

  try {
    const formData = new FormData(form);

    const response = await fetch(
`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`,      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    const data = await response.json();

    // FormSubmit can return success as a string.
    if (
      response.ok &&
      (data.success === "true" || data.success === true)
    ) {
      setFormStatus("success");
      setFeedback(
        "Thank you! Your message has been sent successfully. I'll get back to you soon."
      );

      form.reset();
setFormData(initialFormData);
      // Clear the success message after 6 seconds.
      // setTimeout(() => {
      //   setFormStatus("idle");
      //   setFeedback("");
      // }, 6000);
    } else {
      throw new Error(
        data.message || "Unable to send your message. Please try again."
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);

    setFormStatus("error");
    setFeedback(
      error.message || "Something went wrong. Please try again."
    );
  }
};

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* SECTION HEADER */}
        <div className="contact-heading">

          <span className="contact-eyebrow">
            <MessageCircle size={15} />
            LET'S CONNECT
            <Sparkles size={14} />
          </span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            {contact.description ||
              "Have an idea, opportunity or project? Let's connect and build something meaningful together."}
          </p>

          <div className="contact-heading-line" />

        </div>

        {/* MAIN CONTENT */}
        <div className="contact-layout">

          {/* CONTACT FORM */}
          <div className="contact-form-card">

            <div className="contact-card-heading">

              <div className="contact-card-icon">
                <Send size={21} />
              </div>

              <div>
                <h3>Send Me a Message</h3>
                <p>I usually respond as soon as possible.</p>
              </div>

            </div>

            {/* FORMSUBMIT INTEGRATION */}
           <form onSubmit={handleSubmit}>

              {/* Email subject */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Enquiry - Suresh Pallapu"
              />

              {/* Email template */}
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Reply directly to visitor */}
              <input
                type="hidden"
                name="_replyto"
                value={formData.email}
              />

              {/* Return to portfolio after submission */}
              <input
                type="hidden"
                name="_next"
                value={returnUrl}
              />

              {/* Honeypot spam protection */}
              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  width: 0,
                }}
              />

              {/* NAME */}
              <div className="contact-input-group">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  minLength={2}
                  autoComplete="name"
                  required
                  disabled={formStatus === "sending"}
                />

              </div>

              {/* EMAIL */}
              <div className="contact-input-group">

                <label htmlFor="contact-email">
                  Your Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  autoComplete="email"
                  required
                  disabled={formStatus === "sending"}
                />

              </div>

              {/* MESSAGE */}
              <div className="contact-input-group">

                <label htmlFor="contact-message">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  minLength={5}
                  maxLength={3000}
                  required
                  disabled={formStatus === "sending"}
                />

                <span className="contact-character-count">
                  {formData.message.length}/3000
                </span>

              </div>

              {/* FEEDBACK */}
              {formStatus === "success" && (
                <div
                  className="contact-feedback success"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={18} />
                  <span>{feedback}</span>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  className="contact-feedback error"
                  role="alert"
                >
                  <AlertCircle size={18} />
                  <span>{feedback}</span>
                </div>
              )}

              {formStatus === "sending" && (
                <div
                  className="contact-feedback success"
                  role="status"
                  aria-live="polite"
                >
                  <LoaderCircle
                    className="contact-spinner"
                    size={18}
                  />
                  <span>{feedback}</span>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={formStatus === "sending"}
              >

                {formStatus === "sending" ? (
                  <>
                    <LoaderCircle
                      className="contact-spinner"
                      size={18}
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}

              </button>

              <p className="contact-form-note">
                <span />
                Your message is securely forwarded to my email
                through FormSubmit.
              </p>

            </form>

          </div>

          {/* CONTACT INFORMATION */}
          <div className="contact-info-card">

            <div className="contact-card-heading">

              <div className="contact-card-icon purple">
                <Code2 size={22} />
              </div>

              <div>
                <h3>Let's Connect</h3>
                <p>I'm available for professional conversations.</p>
              </div>

            </div>

            {/* CONTACT DETAILS */}
            <div className="contact-info-list">

              <a
                href={`mailto:${email}`}
                className="contact-info-item"
              >

                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email Address</span>
                  <strong>{email}</strong>
                </div>

                <ArrowUpRight
                  size={17}
                  className="contact-info-arrow"
                />

              </a>

              {phone && !phone.includes("X") && (
                <a
                  href={`tel:${phone.replace(/[\s-]/g, "")}`}
                  className="contact-info-item"
                >

                  <div className="contact-info-icon purple">
                    <Phone size={20} />
                  </div>

                  <div>
                    <span>Phone Number</span>
                    <strong>{phone}</strong>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="contact-info-arrow"
                  />

                </a>
              )}

              <div className="contact-info-item">

                <div className="contact-info-icon green">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>{location}</strong>
                </div>

              </div>

            </div>

            {/* SOCIAL LINKS */}
            {socialLinks.length > 0 && (
              <div className="contact-social-section">

                <h4>CONNECT WITH ME</h4>

                <div className="contact-social-links">

                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        href={item.url}
                        key={item.name}
                        className={`contact-social-btn ${item.className}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                      >

                        <Icon size={18} />
                        <span>{item.name}</span>
                        <ArrowUpRight size={13} />

                      </a>
                    );
                  })}

                </div>

              </div>
            )}

            {/* AVAILABILITY */}
            <div className="contact-availability">

              <span className="availability-dot" />

              <div>
                <strong>
                  {personal.availability || "Open to opportunities"}
                </strong>

                <p>
                  Feel free to reach out for collaboration.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="contact-bottom">

          <span>THANK YOU FOR VISITING</span>

          <h3>
            Let's Create Something{" "}
            <span>Great Together.</span>
          </h3>

          <a href={`mailto:${email}`}>
            Start a Conversation
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;
