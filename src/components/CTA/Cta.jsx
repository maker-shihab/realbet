import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/icons/facebook.png';
import fluterwave from '../../images/icons/fluterwave.png';
import instax from '../../images/icons/insta-x.png';
import instagram from '../../images/icons/instagram.png';
import interswitch from '../../images/icons/interswitch.png';
import linkedin from '../../images/icons/linkedin.png';
import opay from '../../images/icons/opay.png';
import palmpay from '../../images/icons/palmpay.png';
import paystack from '../../images/icons/paystack.png';
import pintarest from '../../images/icons/pintarest.png';
import snapchart from '../../images/icons/snapchart.png';
import teligram from '../../images/icons/teligram.png';
import tiktok from '../../images/icons/tiktok.png';
import twitter from '../../images/icons/twitter.png';
import vimio from '../../images/icons/vimio.png';
import wpurple from '../../images/icons/w-purple.png';
import whatsapp from '../../images/icons/whatsapp.png';
import xpresspay from '../../images/icons/xpresspay.png';
import youtube from '../../images/icons/youtube.png';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.wrapper}>

          <ul className={styles.brands}>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={interswitch} alt="brands" />
              </Link>
            </li>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={paystack} alt="brands" />
              </Link>
            </li>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={xpresspay} alt="brands" />
              </Link>
            </li>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={fluterwave} alt="brands" />
              </Link>
            </li>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={palmpay} alt="brands" />
              </Link>
            </li>
            <li className={styles.singleBrand}>
              <Link to={"/"}>
                <img src={opay} alt="brands" />
              </Link>
            </li>
          </ul>

          <div className={styles.socail}>
            <ul>
              <li>
                <Link to={"/"}>
                  <img src={twitter} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={youtube} alt="youtube" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={snapchart} alt="snapchart" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={pintarest} alt="pintarest" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={whatsapp} alt="whatsapp" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={tiktok} alt="tiktok" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={vimio} alt="vimio" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={wpurple} alt="wpurple" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={teligram} alt="teligram" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={instax} alt="instax" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;