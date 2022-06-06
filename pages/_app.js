import "../styles/globals.css";
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import DashboardLayout from "../components/dashboard/Layout/DashboardLayout";
import UserDashboardLayout from "../components/dashboard/Layout/userDashboardLayout";
const themes = {
	dark: "./dark.css",
	light: "./light.css",
};

function DoPay({ Component, pageProps, router }) {
	if (router.pathname.startsWith("/admin/")) {
		return (
			<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
				<>
					<DashboardLayout>
						<Component {...pageProps}></Component>
					</DashboardLayout>
				</>
			</ThemeSwitcherProvider>
		);
	}

	if (router.pathname.startsWith("/user/")) {
		return (
			<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
				<>
					<UserDashboardLayout>
						<Component {...pageProps}></Component>
					</UserDashboardLayout>
				</>
			</ThemeSwitcherProvider>
		);
	}
	return (
		<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
			{/* <SiteLayout> */}
			<Component {...pageProps}></Component>
			{/* </SiteLayout> */}
		</ThemeSwitcherProvider>
	);
}

export default DoPay;
