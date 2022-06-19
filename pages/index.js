import { Button, Space, DatePicker, Card, Switch } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useState } from "react";
import Layout from "../components/layout/Layout"
import LandingHome from "../components/landingPage/landingHome.js";

export default function Home() {
  // const router = useRouter();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push(`/admin/users`);
  // };
  const [isDarkMode, setIsDarkMode] = useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === "loading") {
    return null;
  }

	return (
			<LandingHome />
	);
}

const onChange = () => {};

// Home.getLayout = getLayout;
