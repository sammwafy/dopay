import { Col, Image, Row } from "antd";
import { FeaturesWrapper } from "./styles/features.styled.js";

const FeaturesLast = () => {
  return (
    <FeaturesWrapper>

      <Row className="lastFeature">
      <Col>
        <div>
          <Image
            src="/imgs/landing/Deco.svg"
            preview={false}
            alt="feature"
          />
          <h2>Secure your payment</h2>
        </div>
        <p>
        Quisque lacinia purus ut libero facilisis, at vulputate sem maximus.
        </p>
        <div className="featureImg">
        <Image
        src="/imgs/landing/Feature3.svg"
        preview={false}
        alt="feature"
      />
      </div>
      </Col>
    </Row>
    
    </FeaturesWrapper>
  );
};

export default FeaturesLast;
