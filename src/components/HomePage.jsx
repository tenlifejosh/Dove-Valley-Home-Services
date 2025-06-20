import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Sparkles, Home, Calendar, Users, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Home Services in <span className="text-yellow-300">Colorado</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We combine decades of hands-on experience with hospitality-driven service for five-star results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/quote">
                  Get Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900">
                <a href="tel:7207768797">
                  Call (720) 776-8797
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">22+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Hospitality-driven service excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local W-2 employees</h3>
              <p className="text-gray-600 text-sm">Fully trained, background-checked, and insured</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% satisfaction guarantee</h3>
              <p className="text-gray-600 text-sm">We're not done until you're completely satisfied</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24hr Response</h3>
              <p className="text-gray-600 text-sm">Quick quotes and flexible scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From deep cleaning to professional painting, we handle it all with the same attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cleaning Services */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dove Valley Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professional residential cleaning services including regular house cleaning, deep cleaning, move-out cleaning, and garage organization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Regular House Cleaning
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Deep Cleaning & Move-Outs
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Garage Clean-Outs & Organization
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/cleaning">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Painting Services */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dove Valley Paint Co.</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Expert painting services with skilled subcontractor crews managed by dedicated Dove Valley project managers for quality results.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Interior Painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Exterior Painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Premium Paint Products
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/painting">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proudly Serving Colorado Communities
            </h2>
            <p className="text-xl text-gray-600">
              We're local to Douglas and Arapahoe counties, serving your neighborhood with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Douglas County</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <span>• Parker</span>
                <span>• Castle Rock</span>
                <span>• Highlands Ranch</span>
                <span>• Lone Tree</span>
                <span>• Castle Pines</span>
                <span>• Littleton</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Arapahoe County</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <span>• Aurora</span>
                <span>• Centennial</span>
                <span>• Englewood</span>
                <span>• Greenwood Village</span>
                <span>• Littleton</span>
                <span>• Sheridan</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/service-areas">
                View All Service Areas <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Dove Valley Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We'll provide transparent pricing and honest recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
              <Link to="/quote">
                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              <a href="tel:7207768797">
                <Phone className="mr-2 w-5 h-5" />
                Call (720) 776-8797
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

