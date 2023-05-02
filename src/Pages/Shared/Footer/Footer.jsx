import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We are a family-owned restaurant that has been serving delicious
              food since 1985.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <p className="text-sm">Monday - Friday: 11am - 10pm</p>
            <p className="text-sm">Saturday: 12pm - 11pm</p>
            <p className="text-sm">Sunday: 12pm - 9pm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Main St</p>
            <p className="text-sm">Anytown, USA 12345</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@recipebook.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center">
              <a href="#" className="text-xl text-white mr-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl text-white mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl text-white mr-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
