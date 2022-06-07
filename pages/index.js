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
			<div style={{ padding: 100 }}>
				<Switch checked={isDarkMode} onChange={toggleTheme} />
				<Space direction='vertical'>
					<Button type='primary'>Primary Button</Button>
					<Button type='ghost' onClick={handleClick}>
						themeMap
					</Button>

					{/* <DatePicker onChange={onChange} /> */}
					<CiCircleFilled />
				</Space>
			</div>
		</Layout>
	);

	// const onChange = () => {};
	// return <LandingHome />;
}

// Home.getLayout = getLayout;
