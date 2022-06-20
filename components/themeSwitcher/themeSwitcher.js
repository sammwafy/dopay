import { SettingFilled } from "@ant-design/icons";
import { Popover, Switch } from "antd";
import { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

const ThemeSwitcher = ({showSwitch}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: isDarkMode ? themes.light : themes.dark });
      return !previous;
    });
  };

  if (status === "loading") {
    return null;
  }

  return showSwitch ? (
    <Switch
      onChange={toggleDarkMode}
      checked={currentTheme === "dark" && true}
    />
  ) : (
    <Popover
      content={
        <Switch
          onChange={toggleDarkMode}
          checked={currentTheme === "dark" && true}
        />
      }
      title="Change Theme"
      trigger="click"
    >
      <SettingFilled />
    </Popover>
  );
};

export default ThemeSwitcher;
