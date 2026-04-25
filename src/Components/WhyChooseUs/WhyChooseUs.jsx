import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: "📚",
    title: "Authentic Books",
    description: "Verified Islamic literature from trusted sources"
  },
  {
    icon: "⭐",
    title: "Quality Content",
    description: "Carefully curated books by renowned scholars"
  },
  {
    icon: "📱",
    title: "E-Pub Available",
    description: "Read on any device with our digital formats"
  },
  {
    icon: "🚚",
    title: "Fast Shipping",
    description: "Quick delivery to your doorstep worldwide"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;