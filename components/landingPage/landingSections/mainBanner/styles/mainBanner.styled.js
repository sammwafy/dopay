import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding: 0 45px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 482px) {
    text-align: center;
    .BannerRow {
      gap: 20px;
    }
    .bannerBTNS {
      justify-content: center;
      margin-top: 15px;
    }
  }
`;
