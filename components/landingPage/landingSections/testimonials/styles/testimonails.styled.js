import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 45px;
  padding-top: 20px;
  h2 {
    font-weight: 600;
    padding-top: 10px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 60px;
      height: 45px;
    }
  }
  .testimonialItem {
    display: flex !important;
    flex-direction: row;
    max-width: 550px;
    margin: 0 auto;
    height: 275px;
    border-bottom-left-radius: 50px;

    > div {
      width: 50%;
    }

    .testimonialsText {
      border-top-left-radius: 30%;
      border-bottom-left-radius: 30px;
      border-top-right-radius: 58%;
      border-bottom-right-radius: 58%;
      margin-right: -130px;
      background: #4caf50;
      z-index: 99999999;
      height: 100%;
      padding: 40px 0 20px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      q,
      h2,
      h3 {
        color: white;
      }
      h2 {
        margin-bottom: 0;
      }
      q {
        max-width: 200px;
        margin-bottom: 20px;
      }
      overflow: hidden;
      .orangeBall {
        position: absolute;
        width: 40px;
        height: 40px;

        bottom: -4px;
        left: -2px;
        background: #ffa000;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 10px;
      }
    }
  }

  .ant-image {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    overflow: hidden;

    img {
      height: 275px;
      width: 350px;
      /* transform: scaleX(-1); */
    }
  }

  .ant-carousel {
    margin: 0 auto;
    max-width: 800px;
    .slick-next,
    .slick-prev {
      width: 60px;
      height: 70px;
      background: #2e7d32 !important;
      border-radius: 8px;
      border-top-right-radius: 40px;
      border-bottom-left-radius: 40px;
    }
    .slick-next:before,
    .slick-prev:before {
      color: white;
      font-size: 28px;
      font-weight: 700;
    }
    .slick-next:hover,
    .slick-prev:hover {
      opacity: 1;
      background: #2e7d32 !important;
      color: white !important;
    }
    .slick-next {
      right: 0;
    }
    .slick-prev {
      left: 10px;
      z-index: 99;
    }
  }

  @media screen and (min-width: 1400px) {
    gap: 40px;
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 482px) {
    justify-content: flex-start;
    gap: 50px;
    align-content: space-around;
    .dashboardImg img {
      width: 280px;
    }
    .ant-carousel {
      max-width: 300px;
    }
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev {
      top: unset;
      bottom: -80px;
    }
    .testimonialItem {
      max-width: 300px;
      height: 210px;
      .testimonialsText {
        padding: 10px 5px;
        border-top-left-radius: 15%;
        q {
          max-width: 120px;
          margin-bottom: 0;
        }
        h2 {
          font-size: 1rem;
        }
        h3 {
          font-size: 0.6rem;
        }
        .orangeBall {
          bottom: -10px;
          left: -15px;
        }
      }
    }
    .ant-carousel {
      .slick-prev,
      .slick-next {
        width: 45px;
        height: 55px;
      }
    }
  }
`;
