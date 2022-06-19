import Layout from "../layout/Layout";
import Features from "./landingSections/features/features.js";
import FeaturesLast from "./landingSections/features/featuresLast.js";
import MainBanner from "./landingSections/mainBanner/mainBanner.js";
import SmartDashboard from "./landingSections/smartDashboard/smartDashboard.js";
import Testimonials from "./landingSections/testimonials/testimonials.js";
import Partners from "./landingSections/partners/partners.js";
import WorksOnMobile from "./landingSections/worksOnMobile/worksOnMobile.js";
import UsersCTA from "./landingSections/usersCTA/usersCTA.js";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
import React, { useState, useEffect } from "react";
import { UpOutlined } from "@ant-design/icons";
import MainHeader from "../layout/mainHeader.js";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Footer from "../layout/footer.js";
const LandingHome = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [currentPage, setcurrentPage] = useState(null);
  const { currentTheme } = useThemeSwitcher();

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleSlideChange = (number) => {
    setcurrentPage(number);
  };
  const goToTop = () => {
    handleSlideChange(0);
  };

  return (
    <LandingWrapper currentTheme={currentTheme}>
      <ReactPageScroller
        customPageNumber={currentPage}
        pageOnChange={handleSlideChange}
      >
        <MainBanner />
        <Features />
        <FeaturesLast />
        <SmartDashboard />
        <Testimonials />
        <Partners />
        <UsersCTA />
        <Footer />
      </ReactPageScroller>
      <div className="top-to-btm">
        {!showTopBtn && (
          <UpOutlined className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  section {
    margin-bottom: 100px;
  }
  section:last-child {
    margin-bottom: 0px;
  }
  > div:first-child {
    width: auto !important;
  }
  > div > div > div:nth-child(2n) {
    background: ${(props) =>
      props.currentTheme === "dark" ? "#303030" : "#e9e9e9"};
    width: 100vw;
    position: relative;
    left: 0;
  }

  .top-to-btm {
    position: relative;
  }
  .icon-position {
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
  }
  .icon-style {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4caf50;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
  }
  .icon-style:hover {
    animation: none;
    background: #fff;
    color: #4caf50;
    border: 2px solid #4caf50;
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
export default LandingHome;
