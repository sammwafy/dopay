import { Carousel, Image } from "antd";
import { SmartDashboardWrapper } from "./styles/smartDashboard.styled.js";

const SmartDashboard = () => {
  const dashboardCarouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SmartDashboardWrapper>
    <div>
      <div>
        <Image src="/imgs/landing/Deco.svg" preview={false} alt="feature" />
        <h2>Smart dashboard</h2>
      </div>
      <p>
        Cras convallis lacus orci, tristique tincidunt magna consequat in. In
        vel est, at euismod libero.
      </p>
      </div>
      <Carousel {...dashboardCarouselSettings} dotPosition="top" effect="fade">
        <div className="carouselItem">
          <div className="dashboardImg">
            <Image
              src="/imgs/landing/dash1.png"
              preview={false}
              alt="dashboard"
            />
          </div>
        </div>
        
        <div className="carouselItem">
          <div className="dashboardImg">
            <Image
              src="/imgs/landing/dash2.png"
              preview={false}
              alt="dashboard"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="dashboardImg">
            <Image
              src="/imgs/landing/dash3.png"
              preview={false}
              alt="dashboard"
            />
          </div>
        </div>
        <div className="carouselItem">
          <div className="dashboardImg">
            <Image
              src="/imgs/landing/dash4.png"
              preview={false}
              alt="dashboard"
            />
          </div>
        </div>
      </Carousel>
    </SmartDashboardWrapper>
  );
};

export default SmartDashboard;
