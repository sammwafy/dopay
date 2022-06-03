import React, { useState, useRef } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Space, Table, Tag, Input } from "antd";
import Image from "next/image";
import { UserWrapper } from "./users.styled";
import { Modal, Button } from "antd";
import UserCard from "../usercard/UserCard";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const Users = () => {
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState("Content of the modal");

	//handle filtered by status.................
	const [filteredInfo, setFilteredInfo] = useState({});
	const handleChange = (pagination, filters) => {
		console.log("Various parameters", pagination, filters);
		setFilteredInfo(filters);
	};
	//end of filtered.................................

	//search table................................................
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef(null);
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div
				style={{
					padding: 8,
				}}
			>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: "block",
					}}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size='small'
						style={{
							width: 90,
						}}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size='small'
						style={{
							width: 90,
						}}
					>
						Reset
					</Button>
					<Button
						type='link'
						size='small'
						onClick={() => {
							confirm({
								closeDropdown: false,
							});
							setSearchText(selectedKeys[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1890ff" : undefined,
				}}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: "#ffc069",
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});
	// end of handle table search..........................

	//handle user change state modal..................
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

	//table columns adding search tech.........................
	const columns = [
		{
			title: "User",
			dataIndex: "user",
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
			render: (_, { status }) => {
				let color;
				switch (status) {
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

				return <Tag color={color}>{status.toUpperCase()}</Tag>;
			},
			// ...getColumnSearchProps("status"),
			filters: [
				{
					text: "pending",
					value: "pending",
				},
				{
					text: "active",
					value: "active",
				},
				{
					text: "deactive",
					value: "deactive",
				},
				{
					text: "suspended",
					value: "suspended",
				},
			],
			filteredValue: filteredInfo.status || null,
			// to filter exact word ex active only not includes deactive
			onFilter: (value, record) => record.status === value,
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			...getColumnSearchProps("email"),
			responsive: ["md"],
		},
		{
			title: "Account",
			dataIndex: "account",
			key: "account",
			width: "50",
			responsive: ["lg"],
		},
		{
			title: "Payment",
			dataIndex: "payment",
			key: "payment",
			width: "70",
			responsive: ["lg"],
		},
	];
	const data = [
		{
			key: "1",
			name: "John Brown",
			account: 32,
			payment: 32,
			email: "john@gmail.com",
			status: "active",
		},
		{
			key: "2",
			name: "Jim Green",
			payment: 42,
			account: 32,
			email: "jim@gmail.com",
			status: "deactive",
		},
		{
			key: "3",
			name: "Joe Black",
			payment: 32,
			account: 32,
			email: "john@gmail.com",
			status: "suspended",
		},
		{
			key: "4",
			name: "Joe brown",
			payment: 32,
			account: 32,
			email: "john@gmail.com",
			status: "pending",
		},
	];
	return (
		<UserWrapper>
			<Table
				columns={columns}
				dataSource={data}
				onChange={handleChange}
				scroll={{ x: "100%" }}
			/>
			<Modal
				title="User's Status"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okButtonProps={{
					style: { backgroundColor: "#B4CD93", borderColor: "#B4CD93" },
				}}
				okText={"save"}
			>
				<UserCard />
			</Modal>
		</UserWrapper>
	);
};

export default Users;
