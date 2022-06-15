import Image from "next/image";
import React, { useState } from "react";
import { UserCardWrapper } from "./userCard.styled";
import { Menu, Dropdown, Space, Tag, Typography } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useUpdateUserStatusMutation } from "../../../../store/api/updateUserStatusApiSlice";
const { Text } = Typography;
const UserCard = ({ user }) => {
	const [updateUserStatus, { isLoading }] = useUpdateUserStatusMutation();

	console.log(user);
	const { fullname, status, email } = user;
	const [stat, setStat] = useState(status);

	let color;
	switch (stat) {
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

	const handleSelect = async (key) => {
		let current = items.filter((e) => e.key === key.key)[0].label;
		console.log(email);
		const newStatus = await updateUserStatus({
			email: email,
			status: current,
		});
		console.log(current);
		console.log(newStatus);
		console.log(user);
		setStat(current);
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
			<h1 className='user-title'>{fullname || ""}</h1>
			<div style={{ display: "var(--desktab)" }}>
				<Space>
					<Text strong level={5}>
						Email
					</Text>
					<Text>{email || ""}</Text>
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
							{stat || ""}
							<DownOutlined />
						</Tag>
					</Space>
				</Dropdown>
			</div>
		</UserCardWrapper>
	);
};

export default UserCard;
