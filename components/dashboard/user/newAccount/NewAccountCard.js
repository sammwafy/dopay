import React from "react";
import { CardWrapper } from "./newAccount.styled";
import { Typography, Image } from "antd";
const { Text, Title } = Typography;
const NewAccountCard = ({ color }) => {
	return (
		<CardWrapper color={color}>
			<Text>12344</Text>
			<Title level={3}>1500 $</Title>

			<Image
				src='account.svg'
				alt='logo'
				preview={false}
				previewPrefixCls={false}
				// height='50px'
				// width='300px'
			/>

			<Text>453535sfffs</Text>
		</CardWrapper>
	);
};

export default NewAccountCard;
