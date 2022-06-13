import { Col, Row, Button, Typography, Image } from "antd";
const { Title } = Typography;
import { BannerWrapper } from "./styles/mainBanner.styled.js";

const MainBanner = () => {
  return (
    <BannerWrapper>
      <Row gutter={32} className="BannerRow">
        <Col sm={12} lg={12}>
          <Row
            justify="space-around"
            style={{ flexDirection: "column", height: "100%" }}
          >
            <div>
              <Title className="bannerTitle">
                Send Money
                <br />
                Abroad Faster
              </Title>
              <Title level={4}>
                A better way to pay anywhere and anytime !
              </Title>
            </div>
            <Row gutter={[15]} className="bannerBTNS">
              <Col>
                <Button type="primary">GET STARTED</Button>
              </Col>
              <Col>
                <Button type="ghost">Contact US</Button>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col sm={12} lg={12} className="bannerIMG">
          <Image
            src="/imgs/landing/mainBanner.svg"
            alt="banner"
            layout="fill"
            preview={{
              visible: false,
            }}
          />
        </Col>
      </Row>
    </BannerWrapper>
  );
};



export default MainBanner;
