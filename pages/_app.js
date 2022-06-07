import "../styles/globals.css";
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import DashboardLayout from "../components/dashboard/Layout/DashboardLayout";

const themes = {
	dark: "./dark.css",
	light: "./light.css",
};

function DoPay({ Component, pageProps, router }) {
	const getLayout = Component?.getLayout || ((page) => page);

	return (
		<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
			{getLayout(<Component {...pageProps}></Component>)}
		</ThemeSwitcherProvider>
	);
}

export default DoPay;
