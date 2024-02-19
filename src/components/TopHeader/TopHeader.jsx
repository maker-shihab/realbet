import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.jpg";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className='container-full mx-auto px-4 lg:px-8'>
        <div className="content py-2 sm:py-4 flex items-center content-between w-full gap-5">
          <div className="left">
            <ul className="flex items-center gap-1 md:gap-2">
              <li className="w-[63px] sm:w-[83px] md:w-32">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="w-full" />
                </Link>
              </li>
              <li>
                <Link to={"/"} className='btn-xs sm:btn-sm md:btn-md btn btn-primary text-white rounded-none md:text-md'>
                  NIGERIA
                </Link>
              </li>
              <li className='hidden md:block'>
                <Link to={"/"} className='btn-sm md:btn-md btn btn-accent text-white w-36 rounded-none'>
                  SPORTS BOOK
                </Link>
              </li>
              <li className='hidden md:block'>
                <Link to={"/"} className='btn-sm md:btn-md btn btn-info rounded-none text-white'>
                  EXCHANGE
                </Link>
              </li>
            </ul>
          </div>
          <div className="right flex items-center justify-end w-full gap-1 md:gap-2">
            <Link to={"/login"} className='btn-xs sm:btn-sm md:btn-md btn btn-error text-white rounded-none'>
              JOIN US
            </Link>
            <Link to={"/login"} className='btn-xs sm:btn-sm md:btn-md btn btn-primary btn-outline border-2 rounded-none'>
              LOGIN
            </Link>
            <button type='button' className='btn-xs sm:btn-sm md:btn-md btn btn-primary btn-outline border-2 rounded-none'>
              EN <LuArrowDownSquare /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;