import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import CleaningPage from './components/CleaningPage'
import PaintingPage from './components/PaintingPage'
import AboutPage from './components/AboutPage'
import ServiceAreasPage from './components/ServiceAreasPage'
import ContactPage from './components/ContactPage'
import QuotePage from './components/QuotePage'
import ServiceCityPage from './components/ServiceCityPage'
import './App.css'

// Valid services and cities for programmatic SEO
const validServices = [
  'house-cleaning',
  'move-out-cleaning', 
  'deep-cleaning',
  'garage-cleanouts',
  'interior-painting',
  'exterior-painting'
]

const validCities = [
  'parker', 'castle-rock', 'highlands-ranch', 'lone-tree', 'castle-pines',
  'aurora', 'centennial', 'englewood', 'greenwood-village', 'littleton', 'sheridan'
]

// Component to handle programmatic SEO routes
const ServiceCityRoute = () => {
  const { slug } = useParams()
  
  // Parse the slug to extract service and city
  // Format: service-city-co (e.g., house-cleaning-parker-co)
  const parts = slug.split('-')
  
  if (parts.length < 3 || parts[parts.length - 1] !== 'co') {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  }
  
  // Remove 'co' from the end
  const withoutCo = parts.slice(0, -1)
  
  // Find the service by checking valid services
  let serviceSlug = null
  let citySlug = null
  
  for (const service of validServices) {
    const serviceParts = service.split('-')
    if (withoutCo.length >= serviceParts.length) {
      const potentialService = withoutCo.slice(0, serviceParts.length).join('-')
      if (potentialService === service) {
        serviceSlug = service
        citySlug = withoutCo.slice(serviceParts.length).join('-')
        break
      }
    }
  }
  
  // Validate city
  if (!validCities.includes(citySlug)) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  }
  
  return <ServiceCityPage serviceSlug={serviceSlug} citySlug={citySlug} />
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cleaning" element={<CleaningPage />} />
            <Route path="/painting" element={<PaintingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            
            {/* Programmatic SEO routes */}
            <Route path="/:slug" element={<ServiceCityRoute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

