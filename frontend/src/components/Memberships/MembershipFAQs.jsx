// MembershipFAQs.jsx
import React from 'react';

const faqs = [
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, we offer flexible month-to-month plans with no long-term contract.",
  },
  {
    question: "Are there student or senior discounts?",
    answer: "Yes, we offer 10% discounts for students and seniors. Bring valid ID during sign-up.",
  },
  {
    question: "What’s included in the Elite plan?",
    answer: "Elite members enjoy 24/7 access, unlimited classes, and free nutrition coaching.",
  },
];

function MembershipFAQs() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipFAQs;
