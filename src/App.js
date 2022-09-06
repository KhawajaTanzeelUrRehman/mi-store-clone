import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import HotAccessories from './components/HotAccessories.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import ProductReviews from './components/ProductReviews.js';
import StarProduct from './components/StarProduct.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';
import data from './data/data.json';

function App() {
  return (
    <Router>

      <PreNavbar />
      <Navbar />
      <Routes>
        <Route exact path="/miphones" element={<NavOptions navOptions={data.miPhones} />} />
        <Route exact path="/redmiphones" element={<NavOptions navOptions={data.redmiPhones} />} />
        <Route exact path="/tv" element={<NavOptions navOptions={data.tv} />} />
        <Route exact path="/laptops" element={<NavOptions navOptions={data.laptop} />} />
        <Route exact path="/lifestyle" element={<NavOptions navOptions={data.fitnessAndLifeStyle} />} />
        <Route exact path="/home" element={<NavOptions navOptions={data.home} />} />
        <Route exact path="/audio" element={<NavOptions navOptions={data.audio} />} />
        <Route exact path="/accessories" element={<NavOptions navOptions={data.accessories} />} />
      </Routes>

      {/* <NavOptions miphones={data.miPhones} redmiphone={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} /> */}
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text='STAR PRODUCTS' />
      <StarProduct StarProducts={data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
