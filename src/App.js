import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Invite from './components/Invite/Invite';
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';
import Deals from './components/DealsToday/Deals';
import Offers from './components/Offers/Offers';
import Forever from './components/Forever/Forever';
import Catagories from './components/Catagories/Catagories';
import OffersTrend from './components/Offers/OffersTrend';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className=' bg-[#EEEEEE]'>
      <Navbar />
      <Invite />
      <Hero />
      <Trending />
      <Deals />
      <OffersTrend />
      {/* <Offers /> */}
      <Forever />
      <Catagories />
      <Feedback />
      <Footer />
    </div>





  );
}

export default App;
