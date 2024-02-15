import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';
const Home = () => {
  return (
    <>
      <Header />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h1>WE ARE THE REALBET</h1>
              <h2>EXCHANGE | SPORTSBOOK | CASINO</h2>
              <p>RealBET is operated by ToledoteConsulting who are licensed andregulated by the National Lottery Regulatory Commission. Member, Association ofNigerian Bookmakers.
                JOIN US</p>
              <Link to={'/'}>JOIN US</Link>
            </div>
            <div className={styles.banner}>
              {/* <img src="" alt="banner" /> */}
              Banner
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;