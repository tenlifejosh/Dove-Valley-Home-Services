import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin, Star, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Dove Valley</span> Home Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              22 years of hospitality-driven service excellence in Douglas and Arapahoe counties.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2002, Dove Valley Home Services has been serving the communities of Douglas and Arapahoe counties with unwavering commitment to quality and customer satisfaction. What started as a small cleaning service has grown into a comprehensive home services company, but our core values remain the same.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our unique approach combines decades of hands-on experience with hospitality-driven service. We understand that inviting someone into your home requires trust, and we've built our reputation on reliability, professionalism, and genuine care for our clients and their properties.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we operate two specialized divisions: <strong>Dove Valley Cleaning</strong> for all your residential cleaning needs, and <strong>Dove Valley Paint Co.</strong> for professional interior and exterior painting services. Both divisions share our commitment to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, no matter how big or small. Our attention to detail and commitment to quality sets us apart.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                We earn your trust through consistent reliability, transparent communication, and treating your home with the same care we'd give our own.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Honest pricing, reliable service, and doing the right thing even when no one is watching. That's the Dove Valley way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local professionals who take pride in their work and care about your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dove Valley Cleaning Team</h3>
              <p className="text-gray-600 mb-4">
                Our cleaning professionals are local W-2 employees, not contractors. They're fully trained, background-checked, and insured. Each team member brings years of experience and a commitment to hospitality-driven service.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Background-checked employees</li>
                <li>✓ Comprehensive training program</li>
                <li>✓ Fully insured and bonded</li>
                <li>✓ Consistent team assignments</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dove Valley Paint Co. Team</h3>
              <p className="text-gray-600 mb-4">
                Our painting division works with skilled subcontractor crews managed by dedicated Dove Valley project managers. This ensures quality control while leveraging specialized expertise.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Experienced painting professionals</li>
                <li>✓ Dedicated project management</li>
                <li>✓ Quality control oversight</li>
                <li>✓ Licensed and insured crews</li>
              </ul>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Dove Valley Cleaning has been taking care of our Parker home for over 3 years. Their attention to detail and consistent quality is unmatched. The team is always professional, punctual, and trustworthy."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Sarah M., Parker Homeowner
              </cite>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "The painting project managed by Dove Valley Paint Co. exceeded our expectations. Professional, on-time, and the quality was outstanding. We'll definitely use them again."
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
            Experience the Dove Valley Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their homes. Get your free quote today.
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

export default AboutPage

