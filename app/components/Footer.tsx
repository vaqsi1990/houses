import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">სახლები</h3>
                        <p className="text-gray-400 text-sm">
                            ჩვენი მიზანია დაგეხმაროთ იდეალური სახლის პოვნაში.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">სწრაფი ბმულები</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    მთავარი
                                </Link>
                            </li>
                            <li>
                                <Link href="/houses" className="text-gray-400 hover:text-white transition-colors">
                                    ობიექტები
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    ჩვენს შესახებ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    კონტაქტი
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">კონტაქტი</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📧 info@houses.ge</li>
                            <li>📞 +995 555 123 456</li>
                            <li>📍 თბილისი, საქართველო</li>
                        </ul>
                    </div>
                </div>

              
            </div>
        </footer>
    )
}

export default Footer
