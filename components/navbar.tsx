import React from 'react'

const Navbar = () => {
    return (
        <nav className="py-4 mx-36">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Menu Contents (Left Side) */}
                <div className="flex items-center">
                    <div className="flex items-center text-white font-semibold text-lg mr-12">
                        <svg className="h-12 w-12 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <text x="0" y="15" font-family="Arial" font-size="16" fill="gold">S</text>
                        </svg>
                        Logo
                    </div>
                    <ul className="flex space-x-10">
                        <li><a href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-yellow-300 border-transparent">Intro</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-yellow-300 border-transparent">About</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-yellow-300 border-transparent">Features</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-yellow-300 border-transparent">Download</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-yellow-300 border-transparent">Pre-registration</a></li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>

                {/* Language Option and Button (Right Side) */}
                <div className="flex items-center space-x-5">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                        <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8v1c-3.859 0-7 3.141-7 7s3.141 7 7 7v1zm0-2c-1.654 0-3-1.346-3-3s1.346-3 3-3v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1zm0-4c-1.654 0-3-1.346-3-3s1.346-3 3-3v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1zm6 5c-.553 0-1 .447-1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-4.411 0-8-3.589-8-8s3.589-8 8-8v1c-3.859 0-7 3.141-7 7s3.141 7 7 7v1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c1.104 0 2-.896 2-2v-1c0-1.654-1.346-3-3-3z" />
                        </svg>
                        <span>EN</span>
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semi-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get The App</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar