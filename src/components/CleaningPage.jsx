import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Sparkles, Home, Calendar, Users, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CleaningPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Cleaning Services</span> in Colorado
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Dove Valley Cleaning brings 22 years of hospitality experience to your home with our locally hired, trained employees.
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
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From regular maintenance to deep cleaning projects, we handle every detail with care and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* House Cleaning */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regular House Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Consistent, reliable cleaning service to keep your home spotless week after week.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Kitchen & bathroom deep clean
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Dusting & vacuuming
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Floor mopping & sanitizing
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/house-cleaning-parker-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Move-Out Cleaning */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Move-Out Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive cleaning to help you get your security deposit back and leave on good terms.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Inside appliances & cabinets
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Baseboards & light fixtures
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Windows & window sills
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/move-out-cleaning-highlands-ranch-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Deep Cleaning */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Intensive cleaning service that tackles every corner, perfect for spring cleaning or special occasions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Behind & under furniture
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Detailed bathroom scrubbing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Kitchen appliance cleaning
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/deep-cleaning-centennial-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Garage Clean-Outs */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garage Clean-Outs & Organization</h3>
              <p className="text-gray-600 mb-6">
                Transform your cluttered garage into an organized, functional space with our specialized service.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Complete decluttering
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Organization systems
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Donation coordination
                </li>
              </ul>
              <Button asChild className="w-full btn-primary">
                <Link to="/garage-cleanouts-castle-rock-co">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dove Valley Cleaning?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">22+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Hospitality-driven service excellence since 2002</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local W-2 Employees</h3>
              <p className="text-gray-600 text-sm">Fully trained, background-checked, and insured</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">We're not done until you're completely satisfied</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Weekly, bi-weekly, monthly, or one-time service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
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
                "Dove Valley Cleaning has been taking care of our Parker home for over 3 years. Their attention to detail and consistent quality is unmatched. The team is always professional, punctual, and trustworthy. I wouldn't trust anyone else with our home!"
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Sarah M., Parker Homeowner
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We serve all of Douglas and Arapahoe counties.
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

export default CleaningPage

