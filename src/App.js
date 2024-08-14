import BannerSwiper from "./components.js/BannerSwipe";
import FeatureArea from "./components.js/FeatureArea";
import FeaturedGrocery from "./components.js/FeaturedGrocery";
import HeaderMain from "./components.js/HeaderMain";
import HeaderTop from "./components.js/HeaderTop";
import MainNavbar from "./components.js/MainNavbar";
import ProductWithDiscounts from "./components.js/ProductsWithDiscount";
import BestSelling from "./components.js/BestSellings";
import WeekendDiscount from "./components.js/WeekendDiscount";
import TopTrendingProduct from "./TopTrendingProducts";
import BlogPost from "./components.js/BlogPost";
import Footer from "./components.js/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Pages.js/AboutUs";
import AccountPage from "./Pages.js/AccountPage";
import WishList from "./Pages.js/WishList";
import CartPages from "./Pages.js/CartPages";
import ContactPage from "./Pages.js/ContactPage";
import HomeTwo from "./Pages.js/HomeTwo";
import HomeThree from "./Pages.js/HomeThree";
import HomeFour from "./Pages.js/HomeFour";
import TrackOrder from "./Pages.js/TrackOrder";
import BlogPage from "./Pages.js/BlogPage";
import BlogRightSidebar from "./Pages.js/BlogRightSidebar";
import BlogLeftSidebar from "./Pages.js/BlogLeftSidebar";
import BlogDetailed from "./Pages.js/BlogDetailed";
import StorePage from "./Pages.js/StorePage";
import Faqs from "./Pages.js/Faqs";
import Invoice from "./Pages.js/Invoice";
import RegisterPage from "./Pages.js/RegisterPage";
import LoginPages from "./Pages.js/LoginPages";
import ServiceArea from "./components.js/ServiceArea";
import PrivacyPolicy from "./Pages.js/PrivacyPolicy";
import CookiesPolicy from "./Pages.js/CookiesPolicy";
import TermsAndCondition from "./Pages.js/TermsAndCondition";
import ErrorPage from "./Pages.js/ErrorPage";
import VendorList from "./Pages.js/VendorsList";
import VendorGrid from "./Pages.js/VendorGrid";
import VendorDetail from "./Pages.js/VendorDetail";
import CheckOut from "./Pages.js/CheckOut";
import ShopDetailVariable from "./Pages.js/ShopDetailVariable";
import HomeFive from "./Pages.js/HomeFive";
import ShopGridSidebar from "./Pages.js/ShopGridSidebar";
import ShopGridTop from "./Pages.js/ShopGridTop";
import ShopListGrid from "./Pages.js/ShopListGrid";
import ShopDetailPage from "./Pages.js/ShopDetailPage";
import ShopDetailTwo from "./Pages.js/ShopDetailTwo";
import ShopRightSidebar from "./Pages.js/ShopRightSidebar";
import ShopDetailFour from "./Pages.js/ShopDetailFour";
import ShopDetailAffliate from "./Pages.js/ShopDetailAflliate";
import ShopDetailGroup from "./Pages.js/ShopDetailGroup";
import ShopCompare from "./Pages.js/ShopCompare";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <MainNavbar />
          <BannerSwiper />
          <FeatureArea />
          <FeaturedGrocery />
          <ProductWithDiscounts />
          <BestSelling />
          <WeekendDiscount />
          <TopTrendingProduct />
          <BlogPost />
          <Footer />
        </>
      } />
      <Route path="/about" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <div className="about-content">
            <AboutUs />
          </div>
          <ServiceArea></ServiceArea>
          <Footer />
        </>
      } />
        <Route path="/accountinfo" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <div className="about-content">
            <AccountPage />
          </div>
          <ServiceArea></ServiceArea>
          <Footer />
        </>
      } />
       <Route path="/wishlist" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <div className="about-content">
            <WishList />
          </div>
          <ServiceArea></ServiceArea>
          <Footer />
        </>
      } />
      <Route path="/viewcart" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <div className="about-content">
            <CartPages />
          </div>
          <ServiceArea></ServiceArea>
          <Footer />
        </>
      } />
      <Route path="/contact" element={
        <>
          <HeaderTop />
          <HeaderMain />
          <MainNavbar></MainNavbar>
          <div className="about-content">
            <ContactPage />
          </div>
          <ServiceArea></ServiceArea>
          <Footer />
        </>
      } />
      <Route path="/hometwo" element={
        <>
         
          <div className="about-content">
            <HomeTwo />
          </div>
         
        </>
      } />
        <Route path="/homethree" element={
        <>
         
          <div className="about-content">
            <HomeThree />
          </div>
         
        </>
      } />
        <Route path="/homefour" element={
        <>
        
          <div className="about-content">
            <HomeFour />
          </div>
         
        </>
      } />
       <Route path="/homefive" element={
        <>
        
          <div className="about-content">
           <HomeFive></HomeFive>
          </div>
         
        </>
      } />
      <Route path="/trackorder" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <TrackOrder />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/Blog" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <BlogPage />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/blogright" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <BlogRightSidebar />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/blogleft" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <BlogLeftSidebar />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/blogdetailed" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <BlogDetailed />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/store" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <StorePage />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/faqs" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <Faqs />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/invoice" element={
        <>
        
          <div className="about-content">
            <Invoice />
          </div>
         
         
        </>
      } />

<Route path="/register" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <RegisterPage />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />

<Route path="/login" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <LoginPages />
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/privacypolicy" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <PrivacyPolicy />
          </div>
         
          <Footer/>
         
        </>
      } />
       <Route path="/cookies" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
           <CookiesPolicy></CookiesPolicy>
          </div>
         
          <Footer/>
         
        </>
      } />

      <Route path="/terms-conditon" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
           <TermsAndCondition></TermsAndCondition>
          </div>
         
          <Footer/>
         
        </>
      } />
      <Route path="/error" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
         <ErrorPage></ErrorPage>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/vendorslist" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
           <VendorList></VendorList>
          </div>

          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/vendorgrid" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
           <VendorGrid></VendorGrid>
          </div>
          
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/vendordetail" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
          <VendorDetail></VendorDetail>
          </div>
          
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/checkout" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
         <CheckOut></CheckOut>
          </div>
          
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/shopvariableproduct" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
         <ShopDetailVariable></ShopDetailVariable>
          </div>
          
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/shopgridsidebar" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
         <ShopGridSidebar></ShopGridSidebar>
          </div>
          <Footer/>
         
        </>
      } />
      
      <Route path="/shopgridtop" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
        <ShopGridTop></ShopGridTop>
          </div>
          <Footer/>
         
        </>
      } />
       <Route path="/shoplisttop" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
        <ShopGridTop></ShopGridTop>
          </div>
          <Footer/>
         
        </>
      } />
      <Route path="/shoplistgrid" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
     <ShopListGrid></ShopListGrid>
          </div>
          <Footer/>
         
        </>
      } />
      <Route path="/shopdetailpage" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
     <ShopDetailPage></ShopDetailPage>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
 <Route path="/shopdetailpage2" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
<ShopDetailTwo></ShopDetailTwo>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      <Route path="/shopdetailrightbar" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
<ShopRightSidebar></ShopRightSidebar>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/shopdetailfour" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
<ShopDetailFour></ShopDetailFour>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
        <Route path="/shopdetailaffliate" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
<ShopDetailAffliate></ShopDetailAffliate>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
       <Route path="/shopdetailgroup" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
<ShopDetailGroup></ShopDetailGroup>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
        <Route path="/shopdetailcompare" element={
        <>
         <HeaderTop />
         <HeaderMain />
         <MainNavbar/>
          <div className="about-content">
            <ShopCompare></ShopCompare>
          </div>
          <ServiceArea></ServiceArea>
          <Footer/>
         
        </>
      } />
      
      
      {/* Add other routes here */}
    </Routes>
    
  </Router>
  );
}

export default App;
