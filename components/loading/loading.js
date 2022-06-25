import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="spinning">
        <div></div>
      </div>
      <h1>Loading ...</h1>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  .spinning {
    position: relative;
    width: 100px;
    height: 100px;

    > div {
      height: 100%;
      width: 100%;
      right: 0px;
      position: absolute;
      border: solid 5px #a9a9a9;
      border-top-color: #a9d161;
      border-radius: 50%;

      transform: rotate(135deg);
      animation: spin 1.3s steps(2) 0.2s infinite;
      -webkit-animation: spin 1.3s linear infinite;

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }

  }
`;
export default Loading;
