import { Link } from 'react-router-dom';
import { data } from '../../../../public/data';
import downloadApp from '../../../assets/images/download-icon.svg';
import bannerImage from '../../../assets/images/hero-banner.png';
import bettingHeadOne from '../../../assets/images/section-header-1.svg';
import anbLogo from '../../../assets/images/trust/anb.png';
import ndprLogo from '../../../assets/images/trust/ndprAudit.svg';
import trustpilotLogo from '../../../assets/images/trust/tolltip.svg';
import Cta from '../../CTA/Cta';
import Card from '../../Ui/Card/Card';

const Home = () => {
  return (
    <>
      <section className="bg-primary text-white mt-3">
        <div className="container mx-auto px-4 md:px-0">
          <div className="lg:flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <div className="lg:w-2/3">
              <div className="text-left py-10 md:py-16 max-w-2xl md:pr-5">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">WE ARE THE REALBET</h1>
                <h2 className="text-lg md:text-2xl text-white mb-4 font-bold">EXCHANGE | SPORTSBOOK | CASINO</h2>
                <p className="text-md md:text-base mb-8">RealBET is operated by ToledoteConsulting who are licensed and regulated by the National Lottery Regulatory Commission. Member, Association of Nigerian Bookmakers.</p>
                <Link to={'/'} className="btn btn-error px-16 md:mr-4 text-white rounded-none">JOIN US</Link>
              </div>
            </div>
            <div className="lg:w-1/3 mt-8 md:mt-0">
              <img src={bannerImage} alt="banner" className="w-full md:max-w-sm mx-auto md:mx-0 lg:absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </section>

      <section className='bettingContent px-4 md:px-0'>
        <div className="bg-white pt-10 md:pt-16">
          <div className="container mx-auto">
            <div className="bettingContent py-4">
            <div className="flex md:items-end gap-4 md:gap-8 pb-8 lg:pb-10 flex-col md:flex-row">
                <div className="h-full w-20 md:w-32">
                  <img src={bettingHeadOne} alt="Betting-Thumb" className="object-contain h-full w-full" />
                </div>
                <div className="flex gap-2 md:gap-4">
                  <Link to={"/"} className="btn btn-accent rounded-none hover:text-white text-white btn-sm md:btn-md md:text-xl">SPORTS BOOK</Link>
                  <Link to={"/"} className="btn btn-accent btn-outline border-2 rounded-none hover:text-white md:text-xl btn-sm md:btn-md">Bet Against The Hous asdfe</Link>
                </div>
              </div>
              <div className="grid grid-col lg:grid-cols-2 gap-8">
                {data.exchange?.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    image={card.image}
                    links={card.links}
                    cardClass={"accentCard"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pb-4">
          <div className="container mx-auto">
            <div className="bettingContent py-8 md:py-16">
              <div className="flex md:items-end gap-4 md:gap-8 pb-8 lg:pb-10 flex-col md:flex-row">
                <div className="h-full w-20 md:w-32">
                  <img src={bettingHeadOne} alt="Betting-Thumb" className="object-contain h-full w-full" />
                </div>
                <div className="flex gap-2 md:gap-4">
                  <Link to={"/"} className="btn btn-info rounded-none text-white hover:text-white md:text-xl btn-sm md:btn-md">SPORTS BOOK</Link>
                  <Link to={"/"} className="btn btn-info btn-outline hover:text-white border-2 rounded-none btn-sm md:btn-md">Bet Against The House</Link>
                </div>
              </div>
              <div className="grid grid-col lg:grid-cols-2 gap-8">
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

      <section className="bg-white py-16 border-t-2 border-primary border-l-0 border-r-0">
        <div className="">
          <div className="container mx-auto block  md:flex gap-8 p-4 items-end">
            <div className="max-w-44 w-full mx-auto md:mx-0">
              <img src={downloadApp} alt="download-app" className="w-full h-auto" />
            </div>
            <div className="text-center mt-8 md:text-right">
              <h3 className="text-center md:text-left text-xl md:text-2xl uppercase text-black font-bold tracking-wider leading-8 pb-4">
                DOWNLOAD OUR MOBILE APPS - NIGERIAS FIRST INTEGRATED SPORTS BETTING PLATFORM
              </h3>
              <Link to={"/"} className="btn btn-error px-12 text-white rounded-none">Download Our App</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  md:py-16 border-2 border-l-0 border-r-0 border-primary">
        <div className="container mx-auto px-4 md:px-0">
          <div className="md:flex gap-10 md:items-center md:justify-center">
            <div className="border-b-2 border-primary md:max-w-48 py-4 md:border-none flex items-center justify-center h-36 ">
              <Link to={"/"} className='max-w-48 block'>
                <img src={trustpilotLogo} alt="organize-logo" className="w-full h-auto" />
              </Link>
            </div>
            <div className="border-b-2 border-primary md:max-w-48 md:border-none flex items-center justify-center h-36">
              <Link to={"/"} className='max-w-48 block'>
                <img src={ndprLogo} alt="organize-logo" className="w-full h-auto" />
              </Link>
            </div>
            <div className="md:max-w-48 flex items-center justify-center h-36">
              <Link to={"/"} className='max-w-48 block'>
                <img src={anbLogo} alt="organize-logo" className="w-full h-auto" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="px-4 py-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center text-[#494949]">SEO Content Block - 1</h3>
              <div className="text-md border-2 border-primary py-3 px-5">
                <p className="text-gray-700 tracking-wide font-semibold">Sports betting is extremely popular around the world and while traditionally most bets are placed via sportsbook using fixed odds, there are other methods of betting. A sports betting exchange is another example in which, rather than betting against the betting company or bookmaker, bettors are able to bet against each other with the option of either backing or lay betting. To find out more about how to utilise a sports betting exchange to enhance your chances of a successful bet read on below for more information</p>
              </div>
            </div>
            <div className="px-4 py-4 md:py-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center text-[#494949]">SEO Content Block - 2</h3>
              <div className="text-md border-2 border-primary py-3 px-5">
                <p className="text-gray-700 tracking-wide font-semibold">Sports betting is extremely popular around the world and while traditionally most bets are placed via a sportsbook using fixed odds, there are other methods of betting. A sports betting exchange is another example in which, rather than betting against the betting company or bookmaker, bettors are able to bet against each other with the option of either backing or lay betting. To find out more about how to utilise a sports betting exchange to enhance your chances of a successful bet read on below for more information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
};

export default Home;