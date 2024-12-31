import React from 'react';
import '../Static/Styles.css';
import LandingPage from '../Header/LandingPage';
import FooterPage from '../Header/FooterPage';
import offered1 from '../Images/offered1.jpeg';
import offered2 from '../Images/offered2.jpeg';
import offered3 from '../Images/offered3.jpeg';
import offered4 from '../Images/offered4.jpeg';
import offered5 from '../Images/offered5.jpeg';
import offered6 from '../Images/offered6.jpeg';
import offered7 from '../Images/offered7.jpeg';
const services = [
  {
    category: "Repair and Maintenance Services",
    image: offered3, // Replace with the actual path to your image
    items: [
      "Screen replacements (mobile phones, tablets, laptops).",
      "Battery replacements.",
      "Motherboard and circuit board repairs.",
      "Diagnostic services for malfunctioning devices.",
    ],
  },
  {
    category: "Software Services",
    image: offered1, // Replace with the actual path to your image
    items: [
      "Operating system installation or reinstallation.",
      "Software troubleshooting.",
      "Virus and malware removal.",
    ],
  },
  {
    category: "Appliance Repair",
    image: offered2 , // Replace with the actual path to your image
    items: [
      "Fixing refrigerators, washing machines, or microwaves.",
      "Troubleshooting for smart appliances.",
    ],
  },
  {
    category: "Maintenance Contracts",
    image: offered4, // Replace with the actual path to your image
    items: ["Annual Maintenance Contracts (AMC) for regular servicing of electronics."],
  },
  {
    category: "Customization and Installation Services",
    image: offered5, // Replace with the actual path to your image
    items: [
      "Assembling customized desktop PCs.",
      "Wall-mounting televisions.",
      "Setting up home theater systems.",
      "Installing and configuring smart home systems.",
    ],
  },
  {
    category: "Networking Services",
    image: offered6, // Replace with the actual path to your image
    items: ["Setting up Wi-Fi networks.", "Installing routers, extenders, and mesh networks."],
  },
  {
    category: "Consultation and Training",
    image: offered7, // Replace with the actual path to your image
    items: [
      "Hands-on demos for new gadgets or appliances.",
      "Guidance on selecting the right devices based on customer needs.",
      "Educating customers on how to use new devices or software.",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div>
    <div className="services-container">
        < LandingPage />
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {services.map((serviceCategory, index) => (
          <div key={index} className="service-category">
            <img src={serviceCategory.image} alt={serviceCategory.category} />
            <h2 className="service-category-title">{serviceCategory.category}</h2>
            <ul>
              {serviceCategory.items.map((item, idx) => (
                <li key={idx} className="service-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
     
    </div>
    < FooterPage />
    </div>
  );
};

export default ServicesPage;
