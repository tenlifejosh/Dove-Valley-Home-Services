import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Palette, Home, Brush, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PaintingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Painting Services</span> in Colorado
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Dove Valley Paint Co. delivers expert painting with skilled subcontractor crews managed by dedicated project managers.
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

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Painting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From interior refresh to exterior protection, we bring quality craftsmanship to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interior Painting */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interior Painting</h3>
              <p className="text-gray-600 mb-6">
                Transform your living spaces with professional interior painting that enhances your home's beauty and value.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Complete room painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Accent walls & feature painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Trim & cabinet painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Ceiling painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Premium paint products
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/interior-painting-lone-tree-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Exterior Painting */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Brush className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exterior Painting</h3>
              <p className="text-gray-600 mb-6">
                Protect and beautify your home's exterior with weather-resistant painting that stands up to Colorado's climate.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Full house exterior painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Siding & trim painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Deck & fence staining
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Pressure washing prep
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Weather-resistant coatings
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/exterior-painting-littleton-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Painting Process
            </h2>
            <p className="text-xl text-gray-600">
              Quality results through proven methods and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation & Quote</h3>
              <p className="text-gray-600 text-sm">Free in-home consultation with detailed, transparent pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Thorough surface prep, protection of furniture and flooring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Application</h3>
              <p className="text-gray-600 text-sm">Expert application using premium paints and proven techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Final Inspection</h3>
              <p className="text-gray-600 text-sm">Quality check and cleanup, ensuring your complete satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dove Valley Paint Co.?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">22+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Decades of painting expertise and customer satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-600 text-sm">High-quality paints and materials for lasting results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee on all painting projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Understanding of Colorado climate and home styles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="flex text-yellow-400">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "Dove Valley Paint Co. transformed our Castle Rock home with their interior painting service. The project manager was incredibly professional, and the crew's attention to detail was outstanding. The quality exceeded our expectations, and they completed everything on time and within budget."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Mike & Jennifer T., Castle Rock Homeowners
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your free, detailed painting estimate today. We serve all of Douglas and Arapahoe counties.
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

export default PaintingPage

