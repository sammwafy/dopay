/** @format */
import Image from "next/image";
import React, { useState } from "react";
import { DashSide, DashSideDrawer } from "../../user/userSidebar/userSidebar.styled";
import logo from "../../../../public/logo.svg";
import { Menu, Drawer } from "antd";
import {
	AppstoreOutlined,
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
	WalletOutlined,
} from "@ant-design/icons";
import Router from "next/router";

const UserSideBar = ({ showDrawer, setShowDrawer }) => {
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
		Router.push({ pathname: `/user/${current}` }, undefined, {
			shallow: true,
		});

		setActive(key.key);
	};

	const items = [
		getItem("Dashboard", "1", <AppstoreOutlined />, "item", ""),
		getItem("Bank Account", "2", <UserOutlined />, "item", "bankaccount"),
		getItem("Transactions", "3", <WalletOutlined />, "item", "transactions"),
		getItem("Pay / Transfer", "4", <SettingOutlined />, "item", "pay"),
		getItem("Withdraw ", "5", <LogoutOutlined />, "item", "withdraw"),
	];

	const items2 = [
		getItem("User Settings ", "4", <SettingOutlined />, "item", "userSetting"),
		getItem(" Logout", "5", <LogoutOutlined />, "item", "logout"),
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
				selectedKeys={active}
			/>
			<Menu
				mode='inline'
				items={items2}
				className='menu'
				selectedKeys={active}
				onClick={handleSelect}
			/>
			<button>Dark Mode</button>
			<Drawer
				title='Navigation'
				placement='left'
				width={200}
				height={100}
				onClose={() => setShowDrawer(false)}
				visible={showDrawer}
				style={{ top: "70px" }}
				className='drawer'
			>
				<DashSideDrawer>
					<Menu
						mode='inline'
						items={items}
						className='menu'
						onClick={handleSelect}
						selectedKeys={active}
					/>
					<Menu
						mode='inline'
						items={items2}
						className='menu'
						selectedKeys={active}
						onClick={handleSelect}
					/>
					<button>Dark Mode</button>
				</DashSideDrawer>
			</Drawer>
		</DashSide>
	);
};

export default UserSideBar;
