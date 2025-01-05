import logo from '../assets/logo_bg.jpg';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#080820] text-[#EAEAEA] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="IEEE Ramaiah" className="h-20 rounded" />
          </div>
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Faculty</a></li>
              <li><a href="#" className="hover:text-gray-400">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-400">Collab</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Follow Us On</h4>
            <div className="flex space-x-4 justify-center md:justify-start mb-2">
              <a href="https://www.instagram.com/ieeeritb/"><FaInstagram className="text-xl hover:text-gray-400" /></a>
              <a href="#"><FaLinkedin className="text-xl hover:text-gray-400" /></a>
              <a href="#"><FaFacebook className="text-xl hover:text-gray-400" /></a>
              <a href="https://www.youtube.com/@ieeerit-b7292"><FaYoutube className="text-xl hover:text-gray-400" /></a>
            </div>
            <p>ieeeirtb@gmail.com</p>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-600 pt-4">
          <p className="text-sm">© Copyright 2023 IEEE - All rights reserved.</p>
          <p className="text-sm">
            Created with <span className="text-red-500">❤️</span> by the Web Resource Team IEEE RITB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
