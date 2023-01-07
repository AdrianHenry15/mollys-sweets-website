import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="contact-container">
                <h2 className="contact-label">Contact Us</h2>
                <a href="tel: (407) 242-4468" className="number">
                    (407) 242-4468
                </a>
                <a
                    href="mailto: mollyspecialtysweets@gmail.com"
                    className="email"
                >
                    mollyspecialtysweets@gmail.com
                </a>
            </div>
            <div className="location-container">
                <h2 className="location-label">Location</h2>
                <div className="locations">
                    2211 Allen Lane <br /> Winter Park, Florida 32792
                </div>
            </div>
            <footer className="footer">
                2022 Molly's Specialty Sweets, Made With Love. Website Created
                By Adrian Henry
            </footer>
        </footer>
    );
};

export default Footer;
