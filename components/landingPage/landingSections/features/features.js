import { Col, Image, Row } from "antd";
import { FeaturesWrapper } from "./styles/features.styled.js";

const Features = () => {
  return (
    <FeaturesWrapper style={{ height: "100%" }}>
      <Row style={{ height: "50%" }}>
        <Col className="content">
          <div>
            <Image src="/imgs/landing/Deco.svg" preview={false} alt="feature" />
            <h2>Control your money anywhere</h2>
          </div>
          <p>
            Cras convallis lacus orci, tristique tincidunt magna consequat in.
            In vel pulvinar est.
          </p>
        </Col>
        <Col className="featureImg">
          <Image
            src="/imgs/landing/Feature1.svg"
            preview={false}
            alt="feature"
          />
        </Col>
      </Row>
      <Row  style={{ height: "50%" }}>
        <Col className="featureImg">
          <Image
            src="/imgs/landing/Feature2.svg"
            preview={false}
            alt="feature"
          />
        </Col>
        <Col className="content">
          <div>
            <Image src="/imgs/landing/Deco.svg" preview={false} alt="feature" />
            <h2>Smart Transaction logs</h2>
          </div>
          <p>
          Quisque lacinia purus ut libero facilisis, at vulputate sem maximus.
          </p>
        </Col>
      </Row>
    </FeaturesWrapper>
  );
};

export default Features;
