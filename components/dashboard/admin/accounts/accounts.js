import React, { useState, useRef } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { Space, Table, Tag, Input } from "antd";
import Image from "next/image";
import { AccountsWrapper } from "./accounts.styled";
import { Modal, Button, Typography } from "antd";
import AccountsCard from "../accounts/accountsCard";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useAccountsMutation } from "../../../../store/api/accountsApiSlice";
const { Text } = Typography;
const Accounts = () => {
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [accounts, { isLoading }] = useAccountsMutation();

	// useEffect(() => {
	// 	try {
	// 		const getAccounts = async () => {
	// 			const data = await accounts().unwrap();
	// 		};
	// 	} catch (error) {}
	// }, [visible]);

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
			title: "Account Number",
			dataIndex: "accountNumber",
			key: "accountNumber",
			width: "200",
			render: (_, record) => (
				<div onClick={showModal}>
					<Text>{record.accountNumber}</Text>
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
					case "verified":
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
					text: "verified",
					value: "verified",
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
			responsive: ["md"],
		},
		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
			width: "70",
			responsive: ["lg"],
		},
	];
	const data = [
		{
			key: "1",
			name: "John Brown",
			accountNumber: "3223 1233 1233 1233",
			balance: "$320000",
			status: "verified",
		},
		{
			key: "2",
			name: "Jim Green",
			accountNumber: "4223 1233 1233 1233",
			balance: "$3000000",
			status: "deactive",
		},
		{
			key: "3",
			name: "Joe Black",
			accountNumber: "3223 1233 1233 1233",
			balance: "$320000000",
			status: "suspended",
		},
		{
			key: "4",
			name: "Joe brown",
			accountNumber: "3223 1233 1233 1233",
			balance: "$3000000002",
			status: "pending",
		},
	];
	return (
		<>
			<AccountsWrapper>
				<Table
					columns={columns}
					dataSource={data}
					onChange={handleChange}
					scroll={{ x: "100%" }}
				/>
			</AccountsWrapper>
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
				<AccountsCard />
			</Modal>
		</>
	);
};

export default Accounts;
