'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Property {
  id: number
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number
  garages: number
  price: string
  image: string
  featured?: boolean
  type: 'sale' | 'rent'
}

const FeaturedProperties = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: '3 ოთახიანი ბინა',
      location: 'ბათუმი',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 720,
      garages: 1,
      price: '70,000 ლარი',
      image: '/batumi.jpg',
      featured: true,
      type: 'sale'
    },
    {
      id: 2,
      title: '2 ოთახიანი ბინა',
      location: 'თბილისი',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 550,
      garages: 0,
      price: '150,000 ლარი',
      image: '/tbilisi.jpg',
      type: 'rent'
    },
    {
      id: 3,
      title: '4 ოთახიანი ბინა',
      location: 'ქუთაისი',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 950,
      garages: 2,
      price: '120,000 ლარი',
      image: '/qutaisi.jpg',
      featured: true,
      type: 'sale'
    },
    {
      id: 4,
      title: '3 ოთახიანი ბინა',
      location: 'რუსთავი',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 680,
      garages: 1,
      price: '85,000 ლარი',
      image: '/rustavi.jpg',
      type: 'rent'
    },
    {
      id: 5,
      title: '5 ოთახიანი ბინა',
      location: 'ბათუმი',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 1200,
      garages: 2,
      price: '200,000 ლარი',
      image: '/hero.jpg',
      featured: true,
      type: 'sale'
    },
    {
      id: 6,
      title: '2 ოთახიანი ბინა',
      location: 'თბილისი',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 500,
      garages: 0,
      price: '90,000 ლარი',
      image: '/tbilisi.jpg',
      type: 'rent'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const getItemVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -100 : 100,
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  })

  return (
    <div className=" px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            რეკომენდებული ობიექტები
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            ეს არის ჩვენი რეკომენდებული ობიექტები
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={getItemVariants(index)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlays */}
                  {/* <div className="absolute inset-0 p-4 flex justify-between items-start">
                 
                    {property.featured && (
                      <div className="bg-pink-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                        რეკომენდებული
                      </div>
                    )}
                    
                  
                    <div className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-semibold">
                      {property.type === 'sale' ? 'იყიდება' : 'იჯარით'}
                    </div>
                  </div> */}

                  {/* Action Icons on Image */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/70 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/70 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/70 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{property.location}</span>
                    </div>

                    {/* Property Attributes */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-sm">{property.bedrooms} საძინებელი</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        <span className="text-sm">{property.bathrooms} სააბაზანო</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className="text-sm">{property.sqft} კვ.ფ</span>
                      </div>
                     
                    </div>

                    {/* Separator */}
                    <div className="border-t border-gray-200 my-4"></div>
                  </div>

                  {/* Price and Action Icons */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {property.price}
                    </div>
                    <div className="flex gap-3">
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/houses"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF385C] text-white rounded-full font-bold hover:bg-[#e62e4d] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>უფრო მეტი</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturedProperties
