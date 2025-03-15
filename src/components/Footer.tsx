import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RELATED LINKS</h3>
          <ul>
            <li><a href="#"><i className="fas fa-circle"></i> HE The President</a></li>
            <li><a href="#"><i className="fas fa-circle"></i> Ministry of Public Security</a></li>
            <li><a href="#"><i className="fas fa-circle"></i> Department of Immigration & Emigration</a></li>
            <li><a href="#"><i className="fas fa-circle"></i> Department of Registration of Persons</a></li>
            <li><a href="#"><i className="fas fa-circle"></i> National Dangerous Drugs Control Board</a></li>
            <li><a href="#"><i className="fas fa-circle"></i> National Police Academy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;