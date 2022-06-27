import React, { useState, useRef, useEffect } from "react";
import { Space, Tag, Input, Table } from "antd";
import { Image } from "antd";
import { Button, Modal } from "antd";
import UserCard from "../usercard/UserCard";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

import { UserWrapper } from "./users.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../store/users/usersSlice";
import { useGetAllUsersMutation } from "../../../../store/api/getAllUsersApiSlice";
const Users = () => {
	const [selectedUser, setSelectedUser] = useState(null);
	const allUsers = useSelector((state) => state.users);
	console.log(allUsers);

	const data =
		allUsers.length > 0 &&
		allUsers?.map((user) => ({
			key: user._id,
			name: user.fullname,
			account: 0,
			payment: 0,
			email: user.email,
			status: user.status,
		}));
	console.log(data);
	const [getAllUsers, { isLoading }] = useGetAllUsersMutation();
	const dispatch = useDispatch();

	const [visible, setVisible] = useState(false);
	useEffect(() => {
		try {
			const apiUsers = async () => {
				const fetchedUsers = await getAllUsers().unwrap();
				console.log(fetchedUsers);
				dispatch(getUsers(fetchedUsers));
			};
			apiUsers();
		} catch (error) {
			console.log(error);
		}
	}, [visible]);

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
	const showModal = (key) => {
		setVisible(true);
		const user = allUsers.filter((user) => user._id === key)[0];
		console.log(user);
		setSelectedUser(user);
	};

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	//table columns adding search tech.........................
	const columns = [
		{
			title: "User",
			dataIndex: "user",
			key: "name",
			render: (_, record) => (
				<div className='table-image' onClick={() => showModal(record.key)}>
					<Image
						src='/admin.jpg'
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

	return (
		<UserWrapper>
			<Table
				columns={columns}
				dataSource={data}
				onChange={handleChange}
				scroll={{ x: "100%" }}
				onRow={(record, rowIndex) => {
					return {
						onClick: (event) => {
							showModal(record.key);
						}, // click row
						//   onDoubleClick: event => {}, // double click row
						//   onContextMenu: event => {}, // right button click row
						//   onMouseEnter: event => {}, // mouse enter row
						//   onMouseLeave: event => {}, // mouse leave row
					};
				}}
				rowClassName={(record, rowIndex) => {
					return "tableRow";
				}}
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
				<UserCard user={selectedUser} />
			</Modal>
		</UserWrapper>
	);
};

export default Users;
