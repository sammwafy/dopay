import Image from "next/image";
import React, { useState } from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { AccountsCardWrapper } from "./accountsCard.styled";

const AccountsCard = () => {
	const [status, setStatus] = useState("pending");

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
			<div className='user-status'>
				<span>Status</span>
				<Dropdown overlay={menu}>
					<Space>
						{status}
						<DownOutlined />
					</Space>
				</Dropdown>
			</div>
		</AccountsCardWrapper>
	);
};

export default AccountsCard;
