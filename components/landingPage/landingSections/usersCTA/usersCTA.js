import { Image } from "antd";
import { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import WorksOnMobile from "../worksOnMobile/worksOnMobile.js";
import { UsersCTAWrapper } from "./styles/usersCTA.styled.js";

// worksOnMob.png
const UsersCTA = () => {
  const [currentThemeCust, setCurrentThemeCust] = useState("light");
  const { currentTheme } = useThemeSwitcher();
  return (
    <UsersCTAWrapper currentTheme={currentTheme}>
      <WorksOnMobile/>
      <div className="usersCTA" style={{backgroundImage: `${currentTheme === 'dark' ? 'url("imgs/landing/Deco2.png")' : 'url("imgs/landing/Deco3.png")' }`}}>
      <h2>234 667</h2>
      <h3>Users and Counting</h3>
      </div>
    </UsersCTAWrapper>
  );
};

export default UsersCTA;