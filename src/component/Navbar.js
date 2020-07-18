import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/product" className="mr-5 hover:text-gray-900">Product</Link>
                        <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
                    </nav>
                    <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Shoe Shop</span>
                    </Link>
                    <div> Cart 0
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar;