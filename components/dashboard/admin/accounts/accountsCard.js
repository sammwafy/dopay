import Image from "next/image";
import React, { useState } from "react";
import { Menu, Dropdown, Space, Typography } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { AccountsCardWrapper } from "./accountsCard.styled";
import { useUpdateAccountStatusMutation } from "../../../../store/api/updateAccountStatusApiSlice";
const { Text } = Typography;
const AccountsCard = ({ account }) => {
	const [updateAccountStatus, { isLoading }] = useUpdateAccountStatusMutation();
	const { _id, userId, status, balance, type } = account;
	const [stat, setStat] = useState(status);

	const handleSelect = async (key) => {
		console.log(key);
		let current = items.filter((e) => e.key === key.key)[0].label;
		const newStatus = await updateAccountStatus({
			_id: account._id,
			status: current,
		});
		console.log(current);
		console.log(newStatus);
		setStat(current);
	};
	const items = [
		{
			key: "1",
			label: "verified",
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
		<AccountsCardWrapper>
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
						Account Number
					</Text>
					<Text>{_id}</Text>
				</Space>
			</div>
			<div style={{ display: "var(--desktop)" }}>
				<Space>
					<Text strong level={5}>
						Balance
					</Text>
					<Text>{balance}$</Text>
				</Space>
			</div>
			<div style={{ display: "var(--desktop)" }}>
				<Space>
					<Text strong level={5}>
						userId
					</Text>
					<Text>{userId}$</Text>
				</Space>
			</div>
			<div style={{ display: "var(--desktop)" }}>
				<Space>
					<Text strong level={5}>
						Type
					</Text>
					<Text>{type}$</Text>
				</Space>
			</div>
			<div className='user-status'>
				<span>Status</span>
				<Dropdown overlay={menu}>
					<Space>
						{stat}
						<DownOutlined />
					</Space>
				</Dropdown>
			</div>
		</AccountsCardWrapper>
	);
};

export default AccountsCard;
