import "../styles/globals.css";
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import DashboardLayout from "../components/dashboard/Layout/DashboardLayout";

// redux import
import { wrapper } from "../store/store";
// import { Provider as ReduxStoreProvider } from "react-redux";
import { CookiesProvider } from "react-cookie";

const themes = {
	dark: "./dark.css",
	light: "./light.css",
};

function DoPay({ Component, pageProps }) {
  // const {store, props} = wrapper.useWrappedStore(rest);
  const getLayout = Component?.getLayout || ((page) => page);
  return (
    <CookiesProvider>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
      {getLayout(<Component {...pageProps}/>)}
      </ThemeSwitcherProvider>
    </CookiesProvider>
  );
}

export default wrapper.withRedux(DoPay);
