import { Er404 } from "./styles/E404.styled";
import Image from "next/image";
import ErrorImg from "../../public/Error.svg";

const E404 = () => {
  return (
    <Er404>
      <div className="er-container">
        <div className="err-img">
          <Image src={ErrorImg} alt="errorimg" className="img" />
        </div>
        <div class="vl"></div>
        <div className="e404">
          <h1>404</h1>
          <h2>This page could not be found</h2>
          <h3>
            You can either stay and chill here, or go back to previous page.
          </h3>
          <button className="backButton">
            <div>back</div>
          </button>
        </div>
      </div>
    </Er404>
  );
};
export default E404;
