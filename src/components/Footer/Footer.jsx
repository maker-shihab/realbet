import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();


  return (
    <footer className="bg-gray-200 py-8 pb-28 lg:pb-8 px-2 sm:px-0">
      <div className="container mx-auto">
        <div className="text-center">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4">
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Terms & Conditions</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Responsible Gambling</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Privacy Policy</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Cookie Policy</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Contact Us</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">FAQ</Link></li>
              <li><Link to={'/'} className="text-black font-semibold hover:underline">Affiliates</Link></li>
            </ul>
          </nav>
          <p className="text-gray-500 text-sm mt-4">
            Copyright &copy; {currentYear} <Link to={"/"} className="text-gray-500 hover:text-blue-500">realbet.ng</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;