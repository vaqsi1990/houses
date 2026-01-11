'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
    const [propertyType, setPropertyType] = useState('')
    const [location, setLocation] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [currentText, setCurrentText] = useState(0)

    const texts = ['იპოვე შენი ოცნების ბინა', 'იპოვე შენი ოცნების სახლი']

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04
            }
        }
    }

    const charVariants = {
        hidden: { 
            opacity: 0, 
            y: 12 
        },
        visible: { 
            opacity: 1, 
            y: 0
        }
    }

    const charTransition = {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
    }

    return (
        <div className="">
        <div className="relative w-full h-[650px] md:h-[700px] lg:h-[800px] overflow-hidden  md:pt-0">
            {/* Background Image */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Image
                    src="/hero.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full pt-8 md:pt-0">
                <div className="max-w-6xl mx-auto px-4 pt-4 w-full">
                    <div className="text-center ">
                        <h1 className="md:text-[30px]  text-[18px] font-bold text-white mb-4 h-[50px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentText}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {texts[currentText].split('').map((char, index) => (
                                        <motion.span
                                            key={index}
                                            variants={charVariants}
                                            transition={charTransition}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </AnimatePresence>
                        </h1>

                     
                    </div>

                    {/* Search Form */}
                    <motion.div 
                        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8 md:mb-0"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        {/* Search Fields */}
                        <div className="space-y-4">
                            {/* First Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Property Type */}
                                <div>
                                    <label className="block text-[16px] font-medium text-gray-700 mb-2">
                                        ქონების ტიპი
                                    </label>
                                    <select
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                                    >
                                        <option value="">ყველა ტიპი</option>
                                        <option value="house">სახლი</option>
                                        <option value="apartment">ბინა</option>
                                        <option value="condo">ნაკვეთი</option>
                                    </select>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-[16px] font-medium text-gray-700 mb-2">
                                        მდებარეობა
                                    </label>
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                                    >
                                        <option value="">ყველა ლოკაცია</option>
                                        <option value="tbilisi">თბილისი</option>
                                        <option value="batumi">ბათუმი</option>
                                        <option value="kutaisi">ქუთაისი</option>
                                        <option value="rustavi">რუსთავი</option>
                                        <option value="gori">გორი</option>
                                    </select>
                                </div>
                            </div>

                            {/* Second Row - Price Range */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Min Price */}
                                <div>
                                    <label className="block text-[16px] font-medium text-gray-700 mb-2">
                                        მინიმალური ფასი
                                    </label>
                                    <input
                                        type="number"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                        placeholder="0"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                                    />
                                </div>

                                {/* Max Price */}
                                <div>
                                        <label className="block text-[16px] font-medium text-gray-700 mb-2">
                                        მაქსიმალური ფასი
                                    </label>
                                    <input
                                        type="number"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        placeholder="ულიმიტო"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
                                    />
                                </div>

                                {/* Search Button */}
                                <div className="flex items-end">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full"
                                    >
                                        <Link
                                            href="/apartments"
                                            className="w-full bg-[#FF385C] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-[#e62e4d] transition-colors block"
                                        >
                                            ძიება
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero
