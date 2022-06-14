import { Button, Space, DatePicker, Card, Switch } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useState } from "react";
import Layout, { getLayout } from "../components/Layout/Layout.js";
import LandingHome from "../components/landingPage/landingHome.js";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push(`/admin/users`);
	};
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
		<Layout>
			<LandingHome />
		</Layout>
	);
}

const onChange = () => {};

// Home.getLayout = getLayout;
