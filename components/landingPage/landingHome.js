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
