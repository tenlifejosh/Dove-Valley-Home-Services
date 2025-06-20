import React, { useEffect } from 'react'
import { ArrowRight, Phone, Mail, MapPin, User, Home, Calendar, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const QuotePage = () => {
  useEffect(() => {
    // Load Jobber form script
    const script = document.createElement('script')
    script.src = 'https://clienthub.getjobber.com/client_hubs/7b8e5f3a-2c9d-4e1a-8f6b-3d2c1a9e8f7b/public/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-section text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="text-yellow-300">Free Quote</span> Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional cleaning and painting services in Douglas and Arapahoe counties. Quick response, transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                <a href="tel:7207768797">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (720) 776-8797
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                <a href="mailto:hello@dovevalleycleaning.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h2>
                
                {/* Jobber Form Embed */}
                <div id="jobber-embed-container">
                  <div 
                    data-jobber-embed="quote-form"
                    data-jobber-client-hub-id="7b8e5f3a-2c9d-4e1a-8f6b-3d2c1a9e8f7b"
                    style={{ minHeight: '500px' }}
                  >
                    {/* Fallback form while Jobber loads */}
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          placeholder="Street address, City, State, ZIP"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a service</option>
                          <option value="house-cleaning">Regular House Cleaning</option>
                          <option value="move-out-cleaning">Move-Out Cleaning</option>
                          <option value="deep-cleaning">Deep Cleaning</option>
                          <option value="garage-cleanout">Garage Clean-Out</option>
                          <option value="interior-painting">Interior Painting</option>
                          <option value="exterior-painting">Exterior Painting</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>

                      <Button type="submit" className="w-full btn-primary text-lg py-3">
                        Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">(720) 776-8797</p>
                        <p className="text-sm text-gray-600">Call or text for immediate response</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">hello@dovevalleycleaning.com</p>
                        <p className="text-sm text-gray-600">Email for detailed inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Service Areas</p>
                        <p className="text-sm text-gray-600">Douglas & Arapahoe Counties, CO</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Quick Response</p>
                        <p className="text-sm text-gray-600">We'll contact you within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Personal Consultation</p>
                        <p className="text-sm text-gray-600">In-home assessment and detailed quote</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Flexible Scheduling</p>
                        <p className="text-sm text-gray-600">Work around your schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Home className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Quality Guarantee</p>
                        <p className="text-sm text-gray-600">100% satisfaction guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-blue-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 22+ years of experience</li>
                    <li>✓ Local W-2 employees</li>
                    <li>✓ Fully insured & bonded</li>
                    <li>✓ Background-checked staff</li>
                    <li>✓ Transparent pricing</li>
                    <li>✓ 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuotePage

