import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from "../MobileMenu/MobileMenu";
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Adjust threshold as needed
        setIsNavActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenBar = () => {
    setIsNavActive(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling when mobile menu is open
  };

  const handleCloseBar = () => {
    setIsNavActive(false);
    document.body.style.overflow = ''; // Enable scrolling when mobile menu is closed
  };

  return (
    <header>
      <TopHeader />
      <div className="bg-primary">
        <div className="container mx-auto flex items-center py-4 text-white px-4">
          <button type="button" className="md:hidden" onClick={handleOpenBar}>
            <FaBars size={24} />
          </button>
          <div className="hidden md:block">
            {/* Your site logo or title */}
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/" activeClassName="text-blue-500" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/search" activeClassName="text-blue-500">Search</NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="text-blue-500">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="text-blue-500">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="text-blue-500">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed z-50 inset-0 bg-white transition-opacity duration-300 h-full ${isNavActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-end px-4 py-6 bg-primary">
          <button type="button" className="text-white" onClick={handleCloseBar}>
            <IoClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center pt-10 mobileNavPoput pb-4 bg-primary">
          <NavLink to="/" className="text-white px-1 py-6 w-52 h-10 flex justify-center items-center hover:bg-white hover:text-primary text-center mx-auto" exact onClick={handleCloseBar}>Home</NavLink>
          <NavLink to="/search" className="text-white px-1 py-6 w-52 h-10 flex justify-center items-center hover:bg-white hover:text-primary text-center mx-auto" onClick={handleCloseBar}>Search</NavLink>
          <NavLink to="/products" className="text-white px-1 py-6 w-52 h-10 flex justify-center items-center hover:bg-white hover:text-primary text-center mx-auto" onClick={handleCloseBar}>Products</NavLink>
          <NavLink to="/about" className="text-white px-1 py-6 w-52 h-10 flex justify-center items-center hover:bg-white hover:text-primary text-center mx-auto" onClick={handleCloseBar}>About Us</NavLink>
          <NavLink to="/contact" className="text-white px-1 py-6 w-52 h-10 flex justify-center items-center hover:bg-white hover:text-primary text-center mx-auto" onClick={handleCloseBar}>Contact Us</NavLink>
        </nav>
        <div className="bg-white flex flex-col items-center py-10 px-4">
        <Link to={"/"} className='btn-md btn btn-accent text-white w-52 h-10 rounded-none'>
          SPORTS BOOK
        </Link>
        <br />
        <Link to={"/"} className='btn-md btn btn-info rounded-none w-52 h-10 text-white'>
          EXCHANGE
        </Link>
      </div>
      </div>

      {/* Bottom Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;