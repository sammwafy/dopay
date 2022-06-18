import styled from "styled-components";

export const SmartDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 45px;
  padding-top: 25px;
  height: 100%;
  h2 {
    font-weight: 600;
    padding-top: 10px;
  }

  > div:first-child,
  > div:first-child > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;
  }

  .dashboardImg img {
    width: 500px;
  }
  .ant-carousel {
    margin-top: 12px;
    .slick-dots-top {
      top: -12px;
    }
    .carouselItem {
      display: block !important;
      margin: 0 auto !important;
      width: 550px !important;
    }
    .slick-dots {
      li {
        height: 14px !important;
        width: 14px !important;
        button {
          background: #fff;
          opacity: 1;
          height: 14px !important;
          width: 14px !important;
          border-radius: 50%;
          border: 3px solid #4caf50;
        }
      }
      li.slick-active button {
        background: #4caf50;
      }
    }
  }
  .slick-slide {
    display: none !important;
  }
  .slick-slide.slick-active {
    display: block !important;
    left: 0 !important;
  }
  .slick-track {
    width: 100% !important;
  }

  @media screen and (min-width: 1400px) {
    h2{
      font-size: 2rem;
    }
    gap: 40px;
    .ant-carousel {
      .carouselItem {
        transform: translateX(-50px);
        img {
          display: block !important;
          margin: 0 auto !important;
          width: 650px !important;
        }
      }
        .slick-dots {
          li {
            height: 25px !important;
            width: 25px !important;
            button {
              height: 25px !important;
              width: 25px !important;
            }
          }
        }
      
    }
  }

  @media screen and (max-width:482px){
    justify-content: flex-start;
    gap:50px;
    align-content: space-around;
    .dashboardImg img{
      width: 280px;
    }
  }
`;
