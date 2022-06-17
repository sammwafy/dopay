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

const LandingHome = () => {
  return (
    <LandingWrapper>
      <ReactPageScroller>
        <MainBanner />
        <Features />
        <FeaturesLast />
        <SmartDashboard />
        <Testimonials />
        <Partners />
        <WorksOnMobile />
        <UsersCTA />
      </ReactPageScroller>
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
    width: 100% !important;
  }

`;
export default LandingHome;
