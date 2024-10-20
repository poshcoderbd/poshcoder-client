import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useAuth } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogSingle from "./pages/blogSingle/BlogSingle";
import Contact from "./pages/contact/Contact";
import DLayout from "./pages/dashboard/DLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ContactUs from "./pages/dashboard/contactUs/ContactUs";
import MyOrder from "./pages/dashboard/myOrder/MyOrder";
import AppDev from "./pages/dashboard/services/AppDev";
import ContentCreation from "./pages/dashboard/services/ContentCreation";
import DigitalMarketing from "./pages/dashboard/services/DigitalMarketing";
import GraphicDesign from "./pages/dashboard/services/GraphicDesign";
import WebDev from "./pages/dashboard/services/WebDev";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import ServicePage from "./pages/servicePage/ServicePage";
import AppDevelop from "./pages/servicePage/appDevelop/AppDevelop";
import Business from "./pages/servicePage/business/Business";
import Content from "./pages/servicePage/content/Content";
import Graphic from "./pages/servicePage/graphic/Graphic";
import Marketing from "./pages/servicePage/marketing/Markating";
import WebsiteDev from "./pages/servicePage/websiteDev/WebsiteDev";
import TeamPage from "./pages/teamPage/TeamPage";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";

function App() {
  const { token } = useAuth();

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const Layout = () => {
    return (
      <div>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  return (
    <Box>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={token ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="register"
            element={token ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service/business" element={<Business />} />
          <Route path="service/webdev" element={<WebsiteDev />} />
          <Route path="service/graphic" element={<Graphic />} />
          <Route path="service/marketing" element={<Marketing />} />
          <Route path="service/appdevelop" element={<AppDevelop />} />
          <Route path="service/content" element={<Content />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="teams" element={<TeamPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogSingle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/dashboard"
          element={token ? <DLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="my-order" element={<MyOrder />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="app-dev" element={<AppDev />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="content-creation" element={<ContentCreation />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
