import { Col, Row, Button, Typography } from "antd";
const { Title } = Typography;
import styled from "styled-components";
import Image from "next/image";

const MainBanner = () => {
  return (
    <BannerWrapper>
    <Row gutter={[32]} >
      <Col span={12} >
        <Row justify="space-around" style={{flexDirection: 'column', height:'100%'}}>
        <Title className="bannerTitle">
        Send Money<br/>abroad faster
        </Title>
        <Title level={4}>A better way to pay anywhere and anytime !</Title>
        <Row gutter={[15]}  style={{alignSelf: 'flex-start'}}>
          <Col>
            <Button type="primary">GET STARTED</Button>
          </Col>
          <Col>
            <Button type="ghost">Contact US</Button>
          </Col>
        </Row>
        </Row>
      </Col>
      <Col span={12}>
        {" "}
        <Image
          width="615"
          height="435"
          src="/imgs/landing/mainBanner.svg"
          alt="banner"
        />{" "}
      </Col>
    </Row>
    </BannerWrapper>
  );
};


const BannerWrapper = styled.div`
.bannerTitle{
  font-size: 62px;
  font-weight: 500;
  white-space: pre-line;
}
`

export default MainBanner;
