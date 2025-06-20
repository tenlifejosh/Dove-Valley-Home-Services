import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Service data for content generation
const serviceData = {
  'house-cleaning': {
    name: 'House Cleaning',
    description: 'Regular residential cleaning service',
    includes: ['Kitchen & bathroom deep clean', 'Dusting & vacuuming', 'Floor mopping & sanitizing', 'Trash removal'],
    benefits: ['Consistent weekly or bi-weekly service', 'Same trusted team each visit', 'Eco-friendly cleaning products', 'Flexible scheduling']
  },
  'move-out-cleaning': {
    name: 'Move-Out Cleaning',
    description: 'Comprehensive cleaning for rental properties',
    includes: ['Inside appliances & cabinets', 'Baseboards & light fixtures', 'Windows & window sills', 'Deep carpet cleaning'],
    benefits: ['Get your security deposit back', 'Leave on good terms with landlord', 'Thorough top-to-bottom cleaning', 'Quick turnaround available']
  },
  'deep-cleaning': {
    name: 'Deep Cleaning',
    description: 'Intensive cleaning service for special occasions',
    includes: ['Behind & under furniture', 'Detailed bathroom scrubbing', 'Kitchen appliance cleaning', 'Ceiling fan & light cleaning'],
    benefits: ['Perfect for spring cleaning', 'Great before hosting events', 'Tackles neglected areas', 'Refreshes your entire home']
  },
  'garage-cleanouts': {
    name: 'Garage Clean-Outs',
    description: 'Complete garage organization and cleaning',
    includes: ['Complete decluttering', 'Organization systems', 'Donation coordination', 'Floor cleaning & sealing'],
    benefits: ['Reclaim your garage space', 'Organized storage solutions', 'Increase home value', 'Professional disposal service']
  },
  'interior-painting': {
    name: 'Interior Painting',
    description: 'Professional interior painting services',
    includes: ['Complete room painting', 'Trim & cabinet painting', 'Ceiling painting', 'Premium paint products'],
    benefits: ['Transform your living space', 'Increase home value', 'Expert color consultation', 'Quality materials & workmanship']
  },
  'exterior-painting': {
    name: 'Exterior Painting',
    description: 'Weather-resistant exterior painting',
    includes: ['Full house exterior painting', 'Siding & trim painting', 'Deck & fence staining', 'Pressure washing prep'],
    benefits: ['Protect against Colorado weather', 'Boost curb appeal', 'Long-lasting results', 'Professional surface preparation']
  }
}

// City data for local references
const cityData = {
  'parker': {
    name: 'Parker',
    county: 'Douglas County',
    neighborhoods: ['Stonegate', 'The Pinery', 'Meridian'],
    nearby: ['Castle Rock', 'Highlands Ranch', 'Lone Tree']
  },
  'castle-rock': {
    name: 'Castle Rock',
    county: 'Douglas County', 
    neighborhoods: ['The Meadows', 'Castle Pines North', 'Founders Village'],
    nearby: ['Parker', 'Lone Tree', 'Littleton']
  },
  'highlands-ranch': {
    name: 'Highlands Ranch',
    county: 'Douglas County',
    neighborhoods: ['Backcountry', 'Westridge', 'Northridge'],
    nearby: ['Littleton', 'Centennial', 'Lone Tree']
  },
  'lone-tree': {
    name: 'Lone Tree',
    county: 'Douglas County',
    neighborhoods: ['RidgeGate', 'Heritage Hills', 'Montecito'],
    nearby: ['Highlands Ranch', 'Centennial', 'Parker']
  },
  'castle-pines': {
    name: 'Castle Pines',
    county: 'Douglas County',
    neighborhoods: ['Castle Pines Village', 'The Canyons', 'Daniels Gate'],
    nearby: ['Castle Rock', 'Highlands Ranch', 'Littleton']
  },
  'aurora': {
    name: 'Aurora',
    county: 'Arapahoe County',
    neighborhoods: ['Southlands', 'Saddle Rock', 'Heritage Eagle Bend'],
    nearby: ['Centennial', 'Englewood', 'Greenwood Village']
  },
  'centennial': {
    name: 'Centennial',
    county: 'Arapahoe County',
    neighborhoods: ['Foxridge', 'Piney Creek', 'Southglenn'],
    nearby: ['Highlands Ranch', 'Lone Tree', 'Englewood']
  },
  'englewood': {
    name: 'Englewood',
    county: 'Arapahoe County',
    neighborhoods: ['Belleview Farms', 'Englewood Hills', 'Malley Drive'],
    nearby: ['Littleton', 'Sheridan', 'Centennial']
  },
  'greenwood-village': {
    name: 'Greenwood Village',
    county: 'Arapahoe County',
    neighborhoods: ['Greenwood Athletic Club', 'Orchard Road', 'Village Center'],
    nearby: ['Centennial', 'Englewood', 'Littleton']
  },
  'littleton': {
    name: 'Littleton',
    county: 'Arapahoe County',
    neighborhoods: ['Ken Caryl', 'Columbine', 'Deer Creek'],
    nearby: ['Highlands Ranch', 'Englewood', 'Sheridan']
  },
  'sheridan': {
    name: 'Sheridan',
    county: 'Arapahoe County',
    neighborhoods: ['Old Town Sheridan', 'Federal Heights', 'Sheridan Station'],
    nearby: ['Englewood', 'Littleton', 'Greenwood Village']
  }
}

const ServiceCityPage = ({ serviceSlug, citySlug }) => {
  // Get service and city data
  const service = serviceData[serviceSlug]
  const city = cityData[citySlug]
  
  if (!service || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Available</h1>
          <p className="text-gray-600 mb-6">
            We don't currently offer {serviceSlug?.replace(/-/g, ' ')} in {citySlug?.replace(/-/g, ' ')}.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const cityName = city.name
  const serviceName = service.name
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Top-Rated <span className="text-yellow-300">{serviceName}</span> in {cityName}, CO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Looking for expert {serviceName.toLowerCase()} in {cityName}, Colorado? Dove Valley Home Services brings 22 years of hospitality-driven experience to every job. Whether you're a busy family in {cityName} or prepping for a major event, we're ready.
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

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional {serviceName} in {cityName}
              </h2>
              <p className="text-xl text-gray-600">
                {service.description} tailored to {cityName} homes and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Dove Valley in {cityName}?</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Local {cityName} team with 22+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fully insured & background-checked employees</span>
                  </li>
                </ul>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                <ul className="space-y-3">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>100% Satisfaction Guarantee:</strong> We're not done until you're completely happy with the results.
                  </p>
                </div>
              </div>
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
                "We loved how professional the team was — they {serviceSlug.includes('painting') ? 'painted our living room flawlessly' : 'cleaned our home perfectly'}! The attention to detail and quality of work exceeded our expectations. Highly recommend Dove Valley to anyone in {cityName}."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Amy R., {cityName} Homeowner
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-50 rounded-xl p-8">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving All of {city.county}</h3>
              <p className="text-gray-700 mb-4">
                Proudly serving all of {city.county}, including {cityName} and nearby communities like {city.nearby.slice(0, 2).join(' and ')}.
              </p>
              <p className="text-sm text-gray-600">
                Popular {cityName} neighborhoods: {city.neighborhoods.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about {serviceName.toLowerCase()} in {cityName}.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How much does {serviceName.toLowerCase()} cost in {cityName}?
                </h3>
                <p className="text-gray-600">
                  Pricing varies based on home size, specific needs, and frequency of service. We provide free, transparent estimates for all {cityName} residents. Most {serviceName.toLowerCase()} projects in {cityName} range from competitive rates with no hidden fees.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you serve all areas of {cityName}?
                </h3>
                <p className="text-gray-600">
                  Yes! We serve all of {cityName}, including {city.neighborhoods.slice(0, 2).join(', ')}, and other neighborhoods throughout {city.county}. Our local team knows the area well and can reach you quickly.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How quickly can you start my {serviceName.toLowerCase()} project?
                </h3>
                <p className="text-gray-600">
                  We typically can schedule {serviceName.toLowerCase()} services in {cityName} within 1-2 weeks, depending on the season and project scope. For urgent needs, we often have same-week availability. Call us at (720) 776-8797 to check current availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎯 Ready for Your {serviceName} in {cityName}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request a free quote today — honest pricing, top-tier service, and the hospitality-driven experience that {cityName} families trust.
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

export default ServiceCityPage

