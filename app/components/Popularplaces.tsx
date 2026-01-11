'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Popularplaces = () => {
    const cities = [
        { name: 'თბილისი', id: 1, image: '/tbilisi.jpg', properties: 203 },
        { name: 'ბათუმი', id: 2, image: '/batumi.jpg', properties: 307 },
        { name: 'ქუთაისი', id: 3, image: '/qutaisi.jpg', properties: 409 },
        { name: 'რუსთავი', id: 4, image: '/rustavi.jpg', properties: 156 }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1
        }
    }

    const itemTransition = {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
    }

    const hoverVariants = {
        hover: {
            scale: 1.02,
            y: -5
        }
    }

    const hoverTransition = {
        duration: 0.3,
        ease: "easeOut" as const
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-8xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-black text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    პოპულარული ქალაქები
                </motion.h2>

                <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>
  {cities.map((city) => (
    <motion.div
      key={city.id}
      variants={itemVariants}
      transition={itemTransition}
      whileHover={{ y: -4 }}
      className="city-card"
    >
      {/* Image */}
      <div className="city-card-2">
        <Image
          src={city.image}
          alt={city.name}
          width={170}
          height={150}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-5">
        <h3 className="text-gray-900 text-lg font-semibold leading-tight">
          {city.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
                {city.properties} ბინა
                </p>
      </div>
    </motion.div>
  ))}
</motion.div>

            </div>
        </div>
    )
}

export default Popularplaces
