import { Link } from 'react-router-dom';
import facebook from '../../assets/images/icons/facebook.png';
import fluterwave from '../../assets/images/icons/fluterwave.png';
import instax from '../../assets/images/icons/insta-x.png';
import instagram from '../../assets/images/icons/instagram.png';
import interswitch from '../../assets/images/icons/interswitch.png';
import linkedin from '../../assets/images/icons/linkedin.png';
import opay from '../../assets/images/icons/opay.png';
import palmpay from '../../assets/images/icons/palmpay.png';
import paystack from '../../assets/images/icons/paystack.png';
import pintarest from '../../assets/images/icons/pintarest.png';
import snapchart from '../../assets/images/icons/snapchart.png';
import teligram from '../../assets/images/icons/teligram.png';
import tiktok from '../../assets/images/icons/tiktok.png';
import twitter from '../../assets/images/icons/twitter.png';
import vimio from '../../assets/images/icons/vimio.png';
import wpurple from '../../assets/images/icons/w-purple.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';
import xpresspay from '../../assets/images/icons/xpresspay.png';
import youtube from '../../assets/images/icons/youtube.png';

const Cta = () => {
  return (
    <section className="py-16  text-white border-2 border-l-0 border-r-0 border-primary px-3 sm:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={interswitch} alt="interswitch" />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={paystack} alt="paystack" />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={xpresspay} alt="xpresspay" />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={fluterwave} alt="fluterwave" />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={palmpay} alt="palmpay" />
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <Link to="/">
              <img src={opay} alt="opay" />
            </Link>
          </div>
        </div>
        <div className="mt-8 px-4 pt-4 md:pt-0 md:px-0">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link to="/">
                <img src={twitter} alt="twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={instagram} alt="instagram" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={facebook} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={youtube} alt="youtube" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={snapchart} alt="snapchart" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={pintarest} alt="pintarest" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={whatsapp} alt="whatsapp" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={tiktok} alt="tiktok" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={vimio} alt="vimio" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={linkedin} alt="linkedin" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={wpurple} alt="wpurple" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={teligram} alt="teligram" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={instax} alt="instax" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cta;