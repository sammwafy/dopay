import Layout from "../Layout/Layout.js";
import MainBanner from "./landingSections/mainBanner/mainBanner.js";

const LandingHome = () => {
  return (
    <Layout>
      <section>
        <MainBanner />
      </section>
      <section>features</section>
      <section>dashbaord banner</section>
      <section>testimonials</section>
      <section>our partners</section>
      <section>works on mobile too</section>
      <section>CTA user count</section>
    </Layout>
  );
};

export default LandingHome;
