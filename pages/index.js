import { Button, Space, DatePicker, Card, Switch } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useState } from "react";
import Layout from "../components/Layout/Layout.js";
import LandingHome from "../components/landingPage/landingHome.js";

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState();
  // const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  // const toggleTheme = (isChecked) => {
  //   setIsDarkMode(isChecked);
  //   switcher({ theme: isChecked ? themes.dark : themes.light });
  // };

  // if (status === "loading") {
  //   return null;
  // }

//   <Layout>
//   <div style={{ padding: 100 }}>
//     <Switch checked={isDarkMode} onChange={toggleTheme} />
//     <Space direction="vertical">
//       <Button type="primary">Primary Button</Button>
//       <Button type="ghost">Ghost Button</Button>
//       <DatePicker onChange={onChange} />
//       <CiCircleFilled />
//     </Space>
//   </div>
// </Layout>

  const onChange = () => {};
  return (
      <LandingHome/>
  );
}
