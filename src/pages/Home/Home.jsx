import React from 'react';
import { Link } from 'react-router-dom';
import Cta from '../../components/CTA/Cta';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Card from '../../components/UI/Card/Card';
import { data } from '../../data';
import downloadApp from '../../images/download-icon.svg';
import bannerImage from '../../images/hero-banner.png';
import bettingHeadOne from '../../images/section-header-1.svg';
import bettingHeadTwo from '../../images/section-header-2.svg';
import anbLogo from '../../images/trust/anb.png';
import ndprLogo from '../../images/trust/ndprAudit.svg';
import trustpilotLogo from '../../images/trust/tolltip.svg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Header />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroWrapper}>
            <div className={styles.heroText}>
              <h1>WE ARE THE REALBET</h1>
              <h2>EXCHANGE | SPORTSBOOK | CASINO</h2>
              <p>RealBET is operated by ToledoteConsulting who are licensed andregulated by the National Lottery Regulatory Commission. Member, Association ofNigerian Bookmakers.</p>
              <Link to={'/'} className={`btn btn_red ${styles.hero_btn}`}>JOIN US</Link>
            </div>
            <div className={styles.banner}>
              <img src={bannerImage} alt="banner" />
            </div>
          </div>
        </div>
      </section>

      <section className='bettingContent'>
        <div className="container-full">
          <div className="bettingWrapper">
            <div className="bettingItems">

              <div className="bettingHead">
                <div className="bettingHead_img">
                  <img src={bettingHeadOne} alt="Betting-Thumb" />
                </div>
                <div className="bettingHead_text">
                  <Link to={"/"} className='btn btn_teal'>SPORTS BOOK</Link>
                  <Link to={"/"} className='btn btn_teal_outline'>Bet Against The House</Link>
                </div>
              </div>

              <div className="bettingCards">
                {data.sportBook?.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    image={card.image}
                    links={card.links}
                    cardClass={"tealCard"}
                  />
                ))}
              </div>
            </div>

            <div className="bettingItems">
              <div className="bettingHead">
                <div className="bettingHead_img">
                  <img src={bettingHeadTwo} alt="Betting-Thumb" />
                </div>
                <div className="bettingHead_text">
                  <Link to={"/"} className='btn btn_purple'>EXCHANGE</Link>
                  <Link to={"/"} className='btn btn_purple_outline'>Bet Against The Peers</Link>
                </div>
              </div>

              <div className="bettingCards">
                {data.sportBook?.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    image={card.image}
                    links={card.links}
                    cardClass={"purpleCard"}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='download_app'>
        <div className='container-full'>
          <div className="download_app_wrapper">
            <div className="download_app_illustration">
              <img src={downloadApp} alt="download-app" />
            </div>
            <div className="download_app_text">
              <h3>DOWNLOAD OUR MOBILE APPS - NIGERIA'SFIRST INTEGRATED SPORTS BETTING PLATFORM
                Download Our App</h3>
              <Link to={"/download"} className='btn btn_red'>Download Our App</Link>
            </div>
          </div>
        </div>
      </section>

      <section className='organization'>
        <div className="container">
          <div className="organize__wrapper">
            <div className="organization__items">
              <div className="organization__item">
                <img src={trustpilotLogo} alt="organize-logo" />
              </div>
              <div className="organization__item">
                <img src={ndprLogo} alt="organize-logo" />
              </div>
              <div className="organization__item">
                <img src={anbLogo} alt="organize-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.seoArea}>
        <div className="container">
          <div className={styles.seo__wrapper}>
            <div className={styles.seo__items}>
              <div className={styles.seo__item}>
                <h3>SEO Content Block - 1</h3>
                <div className={styles.seo__itemText}>
                  <p>Sports betting is extremelypopular around the world and while traditionally most bets are placed via sportsbook usingfixed odds, there are other methods of betting. A sports betting exchange isanother example in which, rather than betting against the betting company orbookmaker, bettors are able tobet against each other with the option of either backing or laybetting.To find out more about how to utilisea sports betting exchange to enhance your chances of a successful bet read onbelow for more information</p>
                </div>
              </div>

              <div className={styles.seo__item}>
                <h3>SEO Content Block - 2</h3>
                <div className={styles.seo__itemText}>
                  <p>Sports betting is extremelypopular around the world and while traditionally most bets are placed viaa sportsbook usingfixed odds, there are other methods of betting. A sports betting exchange isanother example in which, rather than betting against the betting company orbookmaker, bettors are able tobet against each other with the option of either backing or laybetting.To find out more about how to utilisea sports betting exchange to enhance your chances of a successful bet read onbelow for more information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default Home;