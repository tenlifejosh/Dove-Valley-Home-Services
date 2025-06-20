import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import logo from '../assets/DoveValleyHomeServicesLogo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Dove Valley Home Services" className="h-10 w-auto" />
              <div className="ml-3">
                <div className="text-lg font-bold">Dove Valley</div>
                <div className="text-sm text-gray-300">Home Services</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Serving Douglas and Arapahoe counties with professional cleaning and painting services for over 22 years.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">22 Years of Excellence</p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/house-cleaning-parker-co" className="text-gray-300 hover:text-white transition-colors">
                  House Cleaning
                </Link>
              </li>
              <li>
                <Link to="/move-out-cleaning-highlands-ranch-co" className="text-gray-300 hover:text-white transition-colors">
                  Move-Out Cleaning
                </Link>
              </li>
              <li>
                <Link to="/deep-cleaning-centennial-co" className="text-gray-300 hover:text-white transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/garage-cleanouts-castle-rock-co" className="text-gray-300 hover:text-white transition-colors">
                  Garage Clean-Outs
                </Link>
              </li>
              <li>
                <Link to="/interior-painting-lone-tree-co" className="text-gray-300 hover:text-white transition-colors">
                  Interior Painting
                </Link>
              </li>
              <li>
                <Link to="/exterior-painting-littleton-co" className="text-gray-300 hover:text-white transition-colors">
                  Exterior Painting
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-blue-300">Douglas County</h4>
                <ul className="text-sm text-gray-300 space-y-1 mt-1">
                  <li>• Parker</li>
                  <li>• Castle Rock</li>
                  <li>• Highlands Ranch</li>
                  <li>• Lone Tree</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-blue-300">Arapahoe County</h4>
                <ul className="text-sm text-gray-300 space-y-1 mt-1">
                  <li>• Aurora</li>
                  <li>• Littleton</li>
                  <li>• Centennial</li>
                  <li>• Englewood</li>
                </ul>
              </div>
              <Link to="/service-areas" className="text-blue-400 hover:text-blue-300 text-sm inline-block mt-2">
                View All Areas →
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:7207768797" className="text-gray-300 hover:text-white transition-colors">
                  (720) 776-8797
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:hello@dovevalleycleaning.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@dovevalleycleaning.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Douglas & Arapahoe Counties, CO
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <Link 
              to="/quote" 
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dove Valley Home Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-400 text-sm">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

