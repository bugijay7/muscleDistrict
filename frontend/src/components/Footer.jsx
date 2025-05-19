import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaFacebook, FaDumbbell } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Pages</h6>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/classes" className="link link-hover">Classes</Link>
          <Link to="/membership" className="link link-hover">Membership</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">MuscleDistrict</h6>
          <Link to="/about" className="link link-hover">About Us</Link>
          <Link to="/trainers" className="link link-hover">Trainers</Link>
          <Link to="/login" className="link link-hover">Login</Link>
          <Link to="/signup" className="link link-hover">Sign Up</Link>
          
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>

      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="flex items-center gap-3">
          <FaDumbbell size={24} className="text-primary" />
          <p>
            MuscleDistrict Ltd.<br />
            123 Fitness St.<br />
            Providing quality service since 20XX
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
