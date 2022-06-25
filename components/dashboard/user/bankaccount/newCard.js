import React from "react";
import { CardWrapper } from "./bankAccount.styled";
import { Typography, Image } from "antd";
const { Text, Title } = Typography;
const NewCard = ({ color, account }) => {
	const { balance, _id } = account;
	return (
		<CardWrapper color={color}>
			<Text> {_id}e </Text>
			<Title level={3}>{balance} $</Title>

			<Image
				src='/columsAccount.svg'
				alt='logo'
				preview={false}
				previewPrefixCls={false}
				style={{ marginTop: "15px" }}
			/>

			{/* <Text>hi</Text> */}
		</CardWrapper>
	);
};

export default NewCard;
