import { Col, Image, Row } from "antd";
import { PartnersWrapper } from "./styles/partners.styled.js";

const Partners = () => {
  return (
    <PartnersWrapper>
      <div>
        <div>
          <Image src="/imgs/landing/Deco.svg" preview={false} alt="feature" />
          <h2>Our Partners</h2>
        </div>
      </div>
      <Row>
        <Col>
          <Image src="imgs/landing/partner1.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner2.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner3.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner4.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner5.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner6.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner7.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner8.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner9.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner10.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner11.png" alt="partner" />
        </Col>
        <Col>
          <Image src="imgs/landing/partner12.png" alt="partner" />
        </Col>
      </Row>
    </PartnersWrapper>
  );
};

export default Partners;
