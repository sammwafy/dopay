import { Image } from "antd";
import React, { useState } from "react";
import { DashNav } from "./userNav.styled";
import {
	BellOutlined,
	DownOutlined,
	SmileOutlined,
	MenuOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Space, Badge, Drawer } from "antd";
import Link from "next/link";
import logo from "../../../../public/logo.svg";
const UserNav = ({ showDrawer, setShowDrawer }) => {
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: (
						<Link href='/user/profile'>
							<a>Profile</a>
						</Link>
					),
				},
				{
					key: "2",
					label: (
						<Link href='/'>
							<a>Setting</a>
						</Link>
					),
					icon: <SmileOutlined />,
				},
				{
					key: "3",
					label: (
						<Link href='/'>
							<a>Logout</a>
						</Link>
					),
					disabled: true,
				},
				{
					key: "4",
					danger: true,
					label: "",
				},
			]}
		/>
	);

	return (
		<DashNav>
			{showDrawer && (
				<CloseOutlined
					style={{ display: "var(--desktab)", color: "black" }}
					onClick={() => setShowDrawer(false)}
				/>
			)}
			{showDrawer || (
				<MenuOutlined
					style={{ display: "var(--desktab)", color: "black" }}
					onClick={() => setShowDrawer(true)}
				/>
			)}
			{/* <div style={{ display: "var(--desktab)" }} className='logo'>
				<Image src={logo} alt='logo' width='100' height='60' />
			</div>

			<Badge count={5} style={{ display: "var(--mobile)" }}>
				<BellOutlined
					style={{ fontSize: "30px", color: "black", display: "var(--mobile)" }}
				/>
			</Badge> */}

			<Dropdown
				overlay={menu}
				style={{ display: "var(--mobile)" }}
				trigger={["click"]}
			>
				<div className='profile'>
					<Image
						src='/admin.jpg'
						alt='logo'
						width='50'
						height='50'
						className='pro'
					/>
				</div>
			</Dropdown>
			<Dropdown overlay={menu} style={{ display: "var(--mobile)" }}>
				<DownOutlined
					style={{ fontSize: "30px", color: "black", display: "var(--mobile)" }}
				/>
			</Dropdown>
		</DashNav>
	);
};

export default UserNav;
