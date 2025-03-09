import React, { useState, useEffect } from "react";
import "./FAQSection.css";

const faqs = [
  { question: "What is The Student Spot?", answer: "The Student Spot is a platform for students to learn and grow." },
  { question: "Is The Student Spot free to use?", answer: "Yes, it is completely free!" },
  { question: "How can I find job opportunities?", answer: "We provide job listings and networking events." },
  { question: "Can I connect with mentors?", answer: "Yes, we have a mentorship program." },
  { question: "What kind of resources are available?", answer: "We offer resume templates, interview guides, and more." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Ensures smooth scrolling without extra space
  useEffect(() => {
    document.documentElement.style.overflow = "auto";
  }, []);

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* FAQ Section */}
      <section id="faq" className="faq-container" style={{ padding: "20px" }}>
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question} <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer style={{ background: "#0d0d0d", color: "white", padding: "40px 0", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Guides</p>
            <p>Help Center</p>
          </div>
          <div>
            <h3>Legal</h3>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/rajkamalprls/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                🔗 LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/the_studentspot/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                📸 Instagram
              </a>
            </p>
            <p>
              <a
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                🐦 Twitter
              </a>
            </p>
          </div>
        </div>
        <hr style={{ margin: "20px 0", borderColor: "#333" }} />
        <p className="center-text">© 2024 The Student Spot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FAQPage;