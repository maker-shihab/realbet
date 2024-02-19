import { NavLink } from "react-router-dom";
import account from '../../assets/images/mobileIcon/account.svg';
import exchange from '../../assets/images/mobileIcon/exchange.svg';
import home from '../../assets/images/mobileIcon/home.svg';
import sport from '../../assets/images/mobileIcon/sport.svg';
import wallet from '../../assets/images/mobileIcon/wallet.svg';

const MobileMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary shadow-md z-40 py-1 sm:pb-3 block lg:hidden">
      <ul className="flex justify-around py-2">
        <li>
          <NavLink to="/" className={`text-white hover:text-gray-300 font-semibold tracking-wider text-xs block`}>
            <span className="flex items-center justify-center mb-1">
              <img src={home} alt="home" />
            </span>
            <small>Home</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-white hover:text-gray-300 font-semibold tracking-wider text-xs block">
            <span className="flex items-center justify-center mb-1">
              <img src={sport} alt="sport" />
            </span>
            <small>Sports Book</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="text-white hover:text-gray-300 font-semibold tracking-wider text-xs block scale-150 relative">
            <span className="flex items-center justify-center w-14 h-14 rounded-full drop-shadow-xl bg-primary absolute -top-7 -left-6">
              <img src={wallet} alt="wallet" />
            </span>
            <small className="hidden">Wallet</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="text-white hover:text-gray-300 font-semibold tracking-wider text-xs block">
            <span className="flex items-center justify-center mb-1">
              <img src={exchange} alt="exchange" />
            </span>
            <small>Exchange</small>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="text-white hover:text-gray-300 font-semibold tracking-wider text-xs block">
            <span className="flex items-center justify-center mb-1">
              <img src={account} alt="account" />
            </span>
            <small>Account</small>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;