import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ServiceAreasPage = () => {
  const douglasCountyCities = [
    { name: 'Parker', slug: 'parker' },
    { name: 'Castle Rock', slug: 'castle-rock' },
    { name: 'Highlands Ranch', slug: 'highlands-ranch' },
    { name: 'Lone Tree', slug: 'lone-tree' },
    { name: 'Castle Pines', slug: 'castle-pines' },
    { name: 'Littleton', slug: 'littleton' }
  ]

  const arapahoeCountyCities = [
    { name: 'Aurora', slug: 'aurora' },
    { name: 'Centennial', slug: 'centennial' },
    { name: 'Englewood', slug: 'englewood' },
    { name: 'Greenwood Village', slug: 'greenwood-village' },
    { name: 'Littleton', slug: 'littleton' },
    { name: 'Sheridan', slug: 'sheridan' }
  ]

  const services = [
    { name: 'House Cleaning', slug: 'house-cleaning' },
    { name: 'Move-Out Cleaning', slug: 'move-out-cleaning' },
    { name: 'Deep Cleaning', slug: 'deep-cleaning' },
    { name: 'Garage Clean-Outs', slug: 'garage-cleanouts' },
    { name: 'Interior Painting', slug: 'interior-painting' },
    { name: 'Exterior Painting', slug: 'exterior-painting' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service Areas in <span className="text-yellow-300">Colorado</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Proudly serving Douglas and Arapahoe counties with professional cleaning and painting services.
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

      {/* Service Areas Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Counties We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local expertise in Douglas and Arapahoe counties, serving your community with care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Douglas County */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Douglas County</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Serving the beautiful communities of Douglas County with reliable home services since 2002.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {douglasCountyCities.map((city) => (
                  <div key={city.slug} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">{city.name}</h4>
                    <div className="space-y-1">
                      <Link 
                        to={`/house-cleaning-${city.slug}-co`}
                        className="block text-sm text-blue-600 hover:text-blue-800"
                      >
                        House Cleaning
                      </Link>
                      <Link 
                        to={`/interior-painting-${city.slug}-co`}
                        className="block text-sm text-blue-600 hover:text-blue-800"
                      >
                        Interior Painting
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arapahoe County */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Arapahoe County</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Trusted by Arapahoe County residents for comprehensive cleaning and painting solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {arapahoeCountyCities.map((city) => (
                  <div key={city.slug} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">{city.name}</h4>
                    <div className="space-y-1">
                      <Link 
                        to={`/house-cleaning-${city.slug}-co`}
                        className="block text-sm text-green-600 hover:text-green-800"
                      >
                        House Cleaning
                      </Link>
                      <Link 
                        to={`/exterior-painting-${city.slug}-co`}
                        className="block text-sm text-green-600 hover:text-green-800"
                      >
                        Exterior Painting
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services by City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Available in Every City
            </h2>
            <p className="text-xl text-gray-600">
              Complete home services available throughout our service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.slug} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{service.name}</h3>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Popular Locations:</h4>
                  <div className="space-y-1">
                    <Link 
                      to={`/${service.slug}-parker-co`}
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      {service.name} in Parker, CO
                    </Link>
                    <Link 
                      to={`/${service.slug}-highlands-ranch-co`}
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      {service.name} in Highlands Ranch, CO
                    </Link>
                    <Link 
                      to={`/${service.slug}-centennial-co`}
                      className="block text-sm text-blue-600 hover:text-blue-800"
                    >
                      {service.name} in Centennial, CO
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose a Local Company?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Knowledge</h3>
              <p className="text-gray-600">
                We understand Colorado's unique climate, home styles, and community needs. Our local expertise ensures better service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Being local means faster response times, flexible scheduling, and the ability to handle urgent requests promptly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Investment</h3>
              <p className="text-gray-600">
                We're invested in our community's success. Your satisfaction directly impacts our reputation and local relationships.
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
            Contact us today for your free quote. We're here to serve your community with excellence.
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

export default ServiceAreasPage

