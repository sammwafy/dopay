/** @format */
import Image from "next/image";
import React, { useState } from "react";
import { DashSide } from "./side.styled";
import logo from "../../../../public/logo.svg";
import { Menu } from "antd";
import {
	AppstoreOutlined,
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
	WalletOutlined,
} from "@ant-design/icons";
import Router from "next/router";

const SideBar = () => {
	// to handle on select over two menu
	const [active, setActive] = useState("");
	//to produce menus items objects
	function getItem(label, key, icon, className, title) {
		return {
			key,
			icon,
			label,
			className,
			title,
		};
	}

	const handleSelect = (key) => {
		console.log(key.key);
		let current = items
			.concat(items2)
			.filter((e) => e.key === key.key)[0].title;
		console.log(current);
		Router.push({ pathname: `${current}` }, undefined, { shallow: true });

		// setActive(key.key);
	};
	const items = [
		getItem("Dashboard", "1", <AppstoreOutlined />, "item", "dashboard"),
		getItem("Users", "2", <UserOutlined />, "item", "users"),
		getItem("Accounts", "3", <WalletOutlined />, "item", "accounts"),
	];

	const items2 = [
		getItem("Setting", "4", <SettingOutlined />, "item", "setting"),
		getItem("Logout", "5", <LogoutOutlined />, "item", "logout"),
	];

	return (
		<DashSide>
			<div className='logo'>
				<Image src={logo} alt='logo' width='100' height='60' />
			</div>
			<Menu
				mode='inline'
				items={items}
				className='menu'
				onClick={handleSelect}
				// selectedKeys={active}
			/>
			<Menu
				mode='inline'
				items={items2}
				className='menu'
				// selectedKeys={active}
				onClick={handleSelect}
			/>
			<button>Dark Mode</button>
		</DashSide>
	);
};

export default SideBar;
