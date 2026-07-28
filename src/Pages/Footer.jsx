import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section">
          <h2 className="footer__logo">ShiftsCube</h2>
          <p>
            Empowering teams and organizations to manage their workforce efficiently
            through smart shift management solutions.
          </p>
        </div>

        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: shiftscube@gmail.com</li>
            <li>Phone: +234 800 123 4567</li>
            <li>Address: Lagos, Nigeria</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} ShiftsCube. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
