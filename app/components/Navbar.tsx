'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hero-ს სიმაღლე: 600px (mobile), 700px (md), 800px (lg)
      // გამოვიყენოთ საშუალო სიმაღლე ან window.innerHeight-ის მიხედვით
      const heroHeight = window.innerWidth >= 1024 ? 800 : window.innerWidth >= 768 ? 700 : 600
      
      if (window.scrollY > heroHeight - 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b border-gray-200 shadow-md' 
          : ''
      }`}
      style={!scrolled ? {
        background: 'rgba(255, 255, 255, 0.12)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - მარცხნივ */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-bold transition-colors ${
              scrolled 
                ? 'text-gray-900 hover:text-gray-700' 
                : 'text-white hover:text-gray-200'
            }`}>
              🏠 
            </Link>
          </div>

          {/* Navigation Links - ცენტრში (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link 
              href="/" 
              className={`md:text-[20px] text-[16px] font-medium transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              მთავარი
            </Link>
            <Link 
              href="/apartments" 
              className={`md:text-[20px] text-[16px] font-medium transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              ბინები
            </Link>
            <Link 
              href="/contact" 
              className={`md:text-[20px] text-[16px] font-medium transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              კონტაქტი
            </Link>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Link 
              href="/login" 
              className="px-4 py-2 bg-[#FF385C] text-white rounded-lg transition-colors font-bold hover:bg-[#e62e4d]"
            >
              შესვლა
            </Link>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current transition-all"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-current transition-all"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-[20px] font-medium py-4 border-b border-gray-200 hover:text-[#FF385C] transition-colors"
                >
                  მთავარი
                </Link>
                <Link
                  href="/apartments"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-[20px] font-medium py-4 border-b border-gray-200 hover:text-[#FF385C] transition-colors"
                >
                  ბინები
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-[20px] font-medium py-4 border-b border-gray-200 hover:text-[#FF385C] transition-colors"
                >
                  კონტაქტი
                </Link>
                <div className="mt-6">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-3 bg-[#FF385C] text-white rounded-lg text-center font-bold hover:bg-[#e62e4d] transition-colors"
                  >
                    შესვლა
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar