import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is SKILL?',
      answer: 'SKILL is a platform designed to enhance your education, career, and personal development. We offer various programs and resources to help you achieve your goals.'
    },
    {
      question: 'How can I sign up?',
      answer: 'You can sign up by visiting our registration page and following the instructions. If you have any issues, please contact our support team for assistance.'
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept various payment methods including credit cards, debit cards, and PayPal. All transactions are secured and encrypted.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Our refund policy allows you to request a refund within 30 days of purchase if you are not satisfied with the program. Please check our refund policy for more details.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can contact our support team via email at support@example.com or call us at +123 456 7890. We are here to assist you with any questions or issues you may have.'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
