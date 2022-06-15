import Layout from "../Layout/Layout.js";
import Features from "./landingSections/features/features.js";
import MainBanner from "./landingSections/mainBanner/mainBanner.js";
import SmartDashboard from "./landingSections/smarDashboard/smartDashboard.js";
import Testimonials from "./landingSections/testimonials/testimonials.js";
import Partners from "./landingSections/partners/partners.js";
import WorksOnMobile from "./landingSections/worksOnMobile/worksOnMobile.js";
import UsersCTA from "./landingSections/usersCTA/UsersCTA.js";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage-umd";

const LandingHome = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	return (
		<>
			<section>
				<MainBanner />
			</section>
			<section>features</section>
			<section>dashbaord banner</section>
			<section>testimonials</section>
			<section>our partners</section>
			<section>works on mobile too</section>
			<section>CTA user count</section>
		</>
	);
=======
  return (
    <>
      <section>
        <MainBanner />
      </section>
      <section>features</section>
      <section>dashbaord banner</section>
      <section>testimonials</section>
      <section>our partners</section>
      <section>works on mobile too</section>
      <section>CTA user count</section>
    </>
  );
>>>>>>> ade7280a5a6981d830540ec0a736d6a54df4e632
=======
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <LandingWrapper id="LandingPage">
          <section data-anchor="mainBanner">
            <MainBanner />
          </section>
          <section data-anchor="features">
            <Features />
          </section>
          <section data-anchor="smartDashboard">
            <SmartDashboard />
          </section>
          <section data-anchor="testimonials">
            <Testimonials />
          </section>
          <section data-anchor="partners">
            <Partners />
          </section>
          <section data-anchor="worksOnMobile">
            <WorksOnMobile />
          </section>
          <section data-anchor="usersCTA">
            <UsersCTA />
          </section>
        </LandingWrapper>
      );
    }}
  />;
>>>>>>> 5c1e3ed853d1e3deb1944110511408b30f983102
=======
	<ReactFullpage
		render={({ state, fullpageApi }) => {
			return (
				<LandingWrapper id='LandingPage'>
					<section data-anchor='mainBanner'>
						<MainBanner />
					</section>
					<section data-anchor='features'>
						<Features />
					</section>
					<section data-anchor='smartDashboard'>
						<SmartDashboard />
					</section>
					<section data-anchor='testimonials'>
						<Testimonials />
					</section>
					<section data-anchor='partners'>
						<Partners />
					</section>
					<section data-anchor='worksOnMobile'>
						<WorksOnMobile />
					</section>
					<section data-anchor='usersCTA'>
						<UsersCTA />
					</section>
				</LandingWrapper>
			);
		}}
	/>;
>>>>>>> f0a1c0616ef709b30eab60a5d9562b74c9b41bd5
};

const LandingWrapper = styled.div`
	section {
		margin-bottom: 100px;
	}
	section:last-child {
		margin-bottom: 0px;
	}
`;
export default LandingHome;
