import React, { useState, useRef, useEffect } from "react";
import { Space, Table, Tag, Input } from "antd";
import Image from "next/image";
import { AccountsWrapper } from "./accounts.styled";
import { Modal, Button, Typography } from "antd";
import AccountsCard from "../accounts/accountsCard";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useGetAllAccountsMutation } from "../../../../store/api/getAllAccountsApiSlice";
import { logOut } from "../../../../store/auth/authSlice";
const { Text } = Typography;
const Accounts = () => {
	const [visible, setVisible] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [accounts, setAccounts] = useState([]);
	const [getAllAccounts, { isLoading }] = useGetAllAccountsMutation();

	useEffect(() => {
		try {
			const getAccounts = async () => {
				const data = await getAllAccounts().unwrap();
				setAccounts(data);
				console.log(data);
			};
			getAccounts();
		} catch (error) {}
	}, [visible]);
	const data = accounts.map((account, i) => ({
		key: account.i,
		userId: account.userId.email,
		accountNumber: account._id,
		balance: account.balance,
		status: account.status,
	}));

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
	//state for selected account
	const [selectedAccount, setSelectedAccount] = useState(null);
	const showModal = (key) => {
		console.log(key);
		let select = accounts.filter((account) => account._id === key)[0];
		console.log(select);
		setSelectedAccount(select);
		setVisible(true);
	};
	//table columns adding search tech.........................
	const columns = [
		{
			title: "Account Number",
			dataIndex: "accountNumber",
			key: "accountNumber",
			width: "200",
			render: (_, record) => (
				<div>
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
			title: "UserID",
			dataIndex: "userId",
			key: "userId",
			width: "200",
			render: (_, record) => (
				<div
					className='table-image'
					onClick={() => showModal(record.accountNumber)}
				>
					<div className='btn-view'>{record.userId}</div>
				</div>
			),
			responsive: ["md"],
		},
		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
			width: "100",
			responsive: ["lg"],
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
					className='table'
					onRow={(record, rowIndex) => {
						return {
							onClick: (event) => {
								showModal(record.accountNumber);
							}, // click row
							//   onDoubleClick: event => {}, // double click row
							//   onContextMenu: event => {}, // right button click row
							//   onMouseEnter: event => {}, // mouse enter row
							//   onMouseLeave: event => {}, // mouse leave row
						};
					}}
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
				<AccountsCard account={selectedAccount} />
			</Modal>
		</>
	);
};

export default Accounts;
