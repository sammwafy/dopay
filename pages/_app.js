import "../styles/globals.css";
// require("../styles/variables.less");
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import DashboardLayout from "../components/dashboard/Layout/DashboardLayout";

const themes = {
	dark: "./dark.css",
	light: "./light.css",
};

function DoPay({ Component, pageProps, router }) {
	const getLayout = (page) =>
		(
			<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
				{Component.getLayout(page)}
			</ThemeSwitcherProvider>
		) ||
		((page) => (
			<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
				{page}
			</ThemeSwitcherProvider>
		));

	return getLayout(<Component {...pageProps}></Component>);

	// const getLayout = Component.getLayout || (page => page)

	// 	<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
	// 		{getLayout(<Component {...pageProps}></Component>)}
	// 	</ThemeSwitcherProvider>;

	// if (router.pathname.startsWith("/admin/")) {
	// 	return (
	// 		<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
	// 			<>
	// 				<DashboardLayout>
	// 					<Component {...pageProps}></Component>
	// 				</DashboardLayout>
	// 			</>
	// 		</ThemeSwitcherProvider>
	// 	);
	// }

	// return (
	// 	<ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
	// 		{/* <SiteLayout> */}
	// 		<Component {...pageProps}></Component>
	// 		{/* </SiteLayout> */}
	// 	</ThemeSwitcherProvider>
	// );
}

export default DoPay;
