import React from 'react';
import '../styles/EServices.css';

const EServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'I-need',
      description: 'Lost Mobile Phone Complain Management System',
      icon: 'mobile-alt'
    },
    {
      id: 2,
      title: 'e - Traffic',
      description: 'Streamline your traffic-related services with our official mobile application',
      icon: 'traffic-light'
    },
    {
      id: 3,
      title: 'Clearance Certificates',
      description: 'Online platform for streamlined clearance certificates',
      icon: 'certificate'
    },
    {
      id: 4,
      title: 'Tell Inspector General of Police',
      description: 'Direct communication with Inspector General\'s office',
      icon: 'user-shield'
    },
    {
      id: 5,
      title: '119 Online Emergency Complaint',
      description: 'Quick online platform for emergency complaints',
      icon: 'exclamation-triangle'
    }
  ];

  return (
    <div className="e-services-container">
      <h2 className="e-services-title">E- Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <i className={`fas fa-${service.icon}`}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EServices;