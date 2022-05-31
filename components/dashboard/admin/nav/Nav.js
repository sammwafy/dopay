import Image from "next/image";
import React from "react";
import { DashNav } from "./nav.styled";
import { BellOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space, Badge } from "antd";
import Link from "next/link";
const Nav = () => {
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: (
						<Link href='/'>
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
					label: "a danger item",
				},
			]}
		/>
	);

	return (
		<DashNav>
			<Badge count={5}>
				<BellOutlined style={{ fontSize: "30px", color: "black" }} />
			</Badge>

			<div className='profile'>
				<Image
					src='/admin.jpeg'
					alt='logo'
					width='50'
					height='50'
					className='pro'
				/>
			</div>
			<Dropdown overlay={menu}>
				<DownOutlined style={{ fontSize: "30px", color: "black" }} />
			</Dropdown>
		</DashNav>
	);
};

export default Nav;
