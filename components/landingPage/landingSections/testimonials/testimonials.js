import { Carousel, Image, Row } from "antd";
import { TestimonialsWrapper } from "./styles/testimonails.styled.js";

const Testimonials = () => {
  const testimonialsCarouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <TestimonialsWrapper>
      <div>
        <div>
          <Image src="/imgs/landing/Deco.svg" preview={false} alt="feature" />
          <h2>Testimonials</h2>
        </div>
        <p>
        Nam sollicitudin dignissim nunc, cursus ullamcorper.
        </p>
      </div>
      <Carousel {...testimonialsCarouselSettings}>
        <Row className="testimonialItem">
          <div className="testimonialsText">
            <q>DoPay is the best online banking system I have used</q>
            <h2>Sara Elwakil</h2>
            <h3>accountant</h3>
            <div className="orangeBall"></div>
          </div>
          <div className="testimonialsImg">
            <Image src="/imgs/landing/testimonial1.jpg" alt="testimonial" />
          </div>
        </Row>
        <Row className="testimonialItem">
          <div className="testimonialsText">
            <q>I love how fast I can transfer money anywhere and anytime !</q>
            <h2>Sameh Mwafy</h2>
            <h3>account manager</h3>
            <div className="orangeBall"></div>
          </div>
          <div className="testimonialsImg">
            <Image src="/imgs/landing/testimonial2.jpg" alt="testimonial" />
          </div>
        </Row>
      </Carousel>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
