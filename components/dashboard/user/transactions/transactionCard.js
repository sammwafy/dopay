import { Divider, Space, Typography } from "antd";
import Image from "next/image";
import React from "react";
import translogo from "../../../../public/transaction.svg";
const { Text, Title } = Typography;
const TransactionCard = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Text strong style={{ position: "absolute", top: "5px", right: "5px" }}>
				{new Date().toLocaleDateString()}
			</Text>

			<div className='img-wrapper'>
				<Image
					src={translogo}
					width='60'
					height='60'
					className='image'
					alt='logo'
				/>
			</div>
			<Title level={3}>Transcation details</Title>
			<Text strong style={{ marginBottom: "10px", color: "#4CAF50" }}>
				NATIONAL BANK OF EGYPT - Recieved details
			</Text>
			<Space size={50}>
				<Text strong>Transaction ID</Text>
				<Text>4444 444 444 444</Text>
			</Space>
			<Divider />
			<Space size={50}>
				<Text strong>Account ID</Text>
				<Text>4444 444 444 444</Text>
			</Space>
			<Divider />
			<Space size={50}>
				<Text strong>To</Text>
				<Text>my self</Text>
			</Space>
			<Divider />
			<Space size={50}>
				<Text strong>Description</Text>
				<Text>freelance work</Text>
			</Space>
			<Divider />
			<Space size={50}>
				<Text strong>Amount</Text>
				<Text>$ 400</Text>
			</Space>
			<Divider />
			<Space size={50}>
				<Text strong>Status</Text>
				<Text>Approved</Text>
			</Space>
			<Divider />
		</div>
	);
};

export default TransactionCard;
