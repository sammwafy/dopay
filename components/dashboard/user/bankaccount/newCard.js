import React from "react";
import { CardWrapper } from "./bankAccount.styled";
import { Typography, Image } from "antd";
const { Text, Title } = Typography;
const NewCard = ({ color }) => {
	return (
		<CardWrapper color={color}>
			<Text> bank audi balance </Text>
			<Title level={3}>1500 $</Title>

			<Image
				src='/columsAccount.svg'
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

export default NewCard;
