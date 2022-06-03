import Image from "next/image";
import React, { useState } from "react";
import { UserCardWrapper } from "./userCard.styled";
import { Menu, Dropdown, Space, Tag, Typography } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
const UserCard = () => {
	const [status, setStatus] = useState("pending");
	let color;
	switch (status) {
		case "pending":
			color = "black";
			break;
		case "active":
			color = "green";
			break;
		case "deactive":
			color = "gray";
			break;
		case "suspended":
			color = "red";
			break;
		default:
			color = "";
			break;
	}

	const handleSelect = (key) => {
		console.log(key);
		let current = items.filter((e) => e.key === key.key)[0].label;
		setStatus(current);
	};
	const items = [
		{
			key: "1",
			label: "active",
		},
		{
			key: "2",
			label: "deactive",
		},
		{
			key: "3",
			label: "suspended",
		},
	];

	const menu = <Menu items={items} onClick={handleSelect} />;
	return (
		<UserCardWrapper>
			<div className='user-img'>
				<Image
					src='/admin.jpeg'
					alt='user'
					width='100'
					height='100'
					className='img'
				/>
			</div>
			<h1 className='user-title'>John Doe</h1>
			<div style={{ display: "var(--desktab)" }}>
				<Space>
					<Text strong level={5}>
						Email
					</Text>
					<Text>jim@gmail.com</Text>
				</Space>
			</div>
			<div style={{ display: "var(--desktop)" }}>
				<Space>
					<Text strong level={5}>
						Payment
					</Text>
					<Text>30000$</Text>
				</Space>
			</div>
			<div style={{ display: "var(--desktop)" }}>
				<Space>
					<Text strong level={5}>
						Number of Accounts
					</Text>
					<Text>5</Text>
				</Space>
			</div>

			<div className='user-status'>
				<span>Status</span>
				<Dropdown overlay={menu}>
					<Space>
						<Tag color={color}>
							{status}
							<DownOutlined />
						</Tag>
					</Space>
				</Dropdown>
			</div>
		</UserCardWrapper>
	);
};

export default UserCard;
