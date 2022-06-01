import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Space, Table, Tag } from "antd";
import Image from "next/image";
import { UserWrapper } from "./users.styled";
import { Modal, Button } from "antd";
import UserCard from "../usercard/UserCard";
const Users = () => {
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = () => {
		setModalText("The modal will be closed after two seconds");
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		setVisible(false);
	};

	const columns = [
		{
			title: "User",
			dataIndex: "User",
			key: "name",
			render: (_, record) => (
				<div className='table-image' onClick={showModal}>
					<Image
						src='/admin.jpeg'
						alt='profile'
						width='50'
						height='50'
						className='pro'
					/>
					<div className='btn-view'>{record.name}</div>
				</div>
			),
		},
		{
			title: "Status",
			key: "status",
			dataIndex: "status",
			render: (_, { tags }) => {
				let color;
				switch (tags) {
					case "pending":
						color = "black";
						break;
					case "active":
						color = "green";
						break;
					case "deactive":
						color = "";
						break;
					default:
						color = "red";
						break;
				}

				return <Tag color={color}>{tags.toUpperCase()}</Tag>;
			},
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Account",
			dataIndex: "account",
			key: "account",
		},
		{
			title: "Payment",
			dataIndex: "payment",
			key: "payment",
		},
	];
	const data = [
		{
			key: "1",
			name: "John Brown",
			account: 32,
			payment: 32,
			email: "john@gmail.com",
			tags: "active",
		},
		{
			key: "2",
			name: "Jim Green",
			payment: 42,
			account: 32,
			email: "jim@gmail.com",
			tags: "deactive",
		},
		{
			key: "3",
			name: "Joe Black",
			payment: 32,
			account: 32,
			email: "john@gmail.com",
			tags: "suspended",
		},
		{
			key: "4",
			name: "Joe brown",
			payment: 32,
			account: 32,
			email: "john@gmail.com",
			tags: "pending",
		},
	];
	return (
		<DashboardLayout>
			<UserWrapper>
				<Table columns={columns} dataSource={data} />
				<Modal
					title="User's Status"
					visible={visible}
					onOk={handleOk}
					confirmLoading={confirmLoading}
					onCancel={handleCancel}
					className='modal'
				>
					<UserCard />
				</Modal>
			</UserWrapper>
		</DashboardLayout>
	);
};

export default Users;
