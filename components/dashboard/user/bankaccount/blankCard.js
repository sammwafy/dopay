import React from "react";
import { BlankCardWrapper } from "./bankAccount.styled";
import { Typography, Image } from "antd";
const { Text, Title } = Typography;

const BlankCard = ({ showModal }) => {
	return (
		<BlankCardWrapper>
			<Image
				src='/plus.svg'
				alt='logo'
				preview={false}
				previewPrefixCls={false}
				height='50px'
				width='50px'
				onClick={showModal}
			/>
			<Text onClick={showModal}>Create a new bank account </Text>
		</BlankCardWrapper>
	);
};

export default BlankCard;
