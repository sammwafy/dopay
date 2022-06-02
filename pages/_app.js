import "../styles/globals.css";
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: "./dark.css",
  light: "./light.css",
};

function DoPay({ Component, pageProps }) {
  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
    >
      <Component {...pageProps} />
    </ThemeSwitcherProvider>
  );
}

export default DoPay;
