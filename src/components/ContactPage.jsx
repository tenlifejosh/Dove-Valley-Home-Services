import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-yellow-300">Dove Valley</span> Home Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready to get started? We're here to help with all your cleaning and painting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/quote">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call or Text</h3>
              <p className="text-gray-600 mb-4">
                For immediate assistance or quick questions
              </p>
              <a 
                href="tel:7207768797" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                (720) 776-8797
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Available 7 days a week
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For detailed inquiries and project discussions
              </p>
              <a 
                href="mailto:hello@dovevalleycleaning.com" 
                className="text-lg font-semibold text-green-600 hover:text-green-800 transition-colors break-all"
              >
                hello@dovevalleycleaning.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We respond within 24 hours
              </p>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-4">
                Proudly serving local communities
              </p>
              <div className="text-purple-600 font-semibold">
                <p>Douglas County</p>
                <p>Arapahoe County</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Colorado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Response Times */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold text-gray-900">By Appointment</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Emergency Services:</strong> Available 24/7 for urgent cleaning needs
                  </p>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Response Times</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone Calls</h4>
                    <p className="text-gray-600">Immediate response during business hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Text Messages</h4>
                    <p className="text-gray-600">Within 2 hours, 7 days a week</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email Inquiries</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quote Requests</h4>
                    <p className="text-gray-600">Same day or next business day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you provide free estimates?
              </h3>
              <p className="text-gray-600">
                Yes! We provide free, no-obligation estimates for all our services. We'll visit your home, assess your needs, and provide transparent pricing with no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely. We are fully licensed, bonded, and insured. All our employees are background-checked W-2 employees, and our painting crews are licensed professionals.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600">
                We serve all of Douglas and Arapahoe counties, including Parker, Castle Rock, Highlands Ranch, Lone Tree, Aurora, Centennial, Englewood, and surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How do I schedule a service?
              </h3>
              <p className="text-gray-600">
                Simply call us at (720) 776-8797, fill out our online quote form, or send us an email. We'll respond quickly to schedule your free estimate and discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for your free estimate. We're here to make your home beautiful and clean.
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

export default ContactPage

