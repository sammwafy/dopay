import React, { useEffect, useRef, useState } from "react";
import { TransactionWrapper } from "./transactions.styled";
import {
	Button,
	Input,
	message,
	Modal,
	Space,
	Table,
	Tag,
	Typography,
} from "antd";
import TransactionCard from "./transactionCard";
import { Image } from "antd";
import { FileOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useUserTransactionsMutation } from "../../../../store/api/getUserTransactionsApiSlice";
const { Text, Title } = Typography;
const Transactions = () => {
	const [visible, setVisible] = useState(false);
	//selected trans state
	const [selectedTrans, setSelectedTrans] = useState(null);

	//get data from backend
	const [UserTransactions, { isLoading }] = useUserTransactionsMutation();
	const [transactions, setTransactions] = useState([]);
	console.log(transactions);

	useEffect(() => {
		try {
			const getTransactions = async () => {
				const response = await UserTransactions();
				console.log(response);
				setTransactions(response);
			};
			getTransactions();
		} catch (error) {
			message.info(error.message);
		}
	}, []);
	const data =
		transactions?.data?.length > 0 &&
		transactions?.data?.map((trans, i) => ({
			key: trans._id,
			from: trans.fromAccountId,
			to: trans.toAccountId,
			date: trans.dateIssued,
			amount: trans.amount,
			type: trans.type,
		}));
	console.log(data);

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
			title: "Date",
			dataIndex: "date",
			key: "date",
			width: "200",
			render: (_, record) => (
				<div onClick={showModal}>
					{/* <Text>{record.date}</Text> */}
					<Text>{new Date().toISOString()}</Text>
				</div>
			),
		},
		{
			title: "Type",
			key: "type",
			dataIndex: "type",
			render: (_, { type }) => {
				let color;
				switch (type) {
					case "recharge":
						color = "green";
						break;
					case "pay":
						color = "yellow";
						break;
					case "withdraw":
						color = "brown";
						break;
					default:
						color = "red";
						break;
				}

				return <Tag color={color}>{type.toUpperCase()}</Tag>;
			},
			// ...getColumnSearchProps("type"),
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
			filteredValue: filteredInfo.type || null,
			// to filter exact word ex active only not includes deactive
			onFilter: (value, record) => record.type === value,
		},
		{
			title: "From",
			dataIndex: "from",
			key: "from",
			width: "70",
			responsive: ["lg"],
		},
		{
			title: "To",
			dataIndex: "to",
			key: "to",
			width: "70",
			responsive: ["lg"],
		},
		// {
		// 	title: "Print",
		// 	dataIndex: "print",
		// 	key: "print",
		// 	width: "70",
		// 	render: (_, record) => (
		// 		<div onClick={showModal}>
		// 			<FileOutlined />
		// 		</div>
		// 	),
		// 	responsive: ["lg"],
		// },
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
			width: "70",
			responsive: ["lg"],
		},
	];

	return (
		<>
			<TransactionWrapper>
				<Title level={3} style={{ color: "#afafaf" }}>
					{"transactions log".toUpperCase()}
				</Title>
				<Text style={{ color: "gray" }}>
					{" "}
					{"monitor all account activity".toUpperCase()}
				</Text>
				<Table
					columns={columns}
					dataSource={data}
					onChange={handleChange}
					scroll={{ x: "100%" }}
					onRow={(record, rowIndex) => {
						return {
							onClick: (event) => {
								showModal();
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
			</TransactionWrapper>
			<Modal
				title='Transaction'
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okButtonProps={{
					style: { backgroundColor: "#B4CD93", borderColor: "#B4CD93" },
				}}
				okText={"Print"}
			>
				<TransactionCard />
			</Modal>
		</>
	);
};

export default Transactions;
