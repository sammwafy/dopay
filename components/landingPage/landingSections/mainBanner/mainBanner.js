import { Col, Row, Button, Typography, Image } from "antd";
const { Title } = Typography;
import styled from "styled-components";

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
          />
        </Col>
      </Row>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .bannerTitle {
    font-size: 62px;
    font-weight: 600;
    white-space: pre-line;
  }
  .bannerBTNS {
    align-self: flex-start;
  }
  .bannerIMG {
    display: flex;
    justify-content: flex-end;

    .ant-image-img {
      width: 615px;
      height: 435px;
    }
  }

  @media screen and (max-width: 482px) {
    .BannerRow {
      flex-direction: column;
      gap: 45px;

      > .ant-col {
        position: unset;
      }
    }
    .bannerTitle {
      font-size: 35px;
      text-align: center;
    }
    h4 {
      text-align: center;
    }
    .bannerBTNS {
      align-self: center;
      margin: 25px 0;
      position: absolut e;
      bottom:0;
    }
    .bannerIMG {
      justify-content: center;
      margin-bottom: 80px;
      .ant-image-img {
        justify-self: center;
        width: 237px !important;
        height: 168px !important;
      }
    }
  }
`;

export default MainBanner;
