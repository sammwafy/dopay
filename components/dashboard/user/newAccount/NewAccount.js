import React from "react";
import { CardWrapper, NewAccountWrapper } from "./newAccount.styled";
import NewAccountCard from "./NewAccountCard";
import { Image, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;
const NewAccount = () => {
	const [myAccounts, setMyAccounts] = useState([
		{ id: "1", amount: "123445 $", name: "ahly", number: "23840950hfjbvk" },
		{
			id: "2",
			amount: "123445133 $",
			name: "personal",
			number: "2384240950hfjbvk",
		},
	]);
	const showForm = () => {
		//show modal logic here
	};

	//عاوزين كمان نعمل شكل الاكونت قبل الaprove شكلو مختلف رمادي مثلا
	return (
		<NewAccountWrapper>
			{myAccounts.map((account) => (
				<NewAccountCard color='#FF6F00' account={account} key={account.id} />
			))}

			{/* <NewAccountCard color='#2196F3' />
			<NewAccountCard color='#FFE085' /> */}
			{myAccounts.length < 3 && (
				<CardWrapper color='crimson'>
					<Image
						src='account.svg'
						alt=''
						preview={false}
						previewPrefixCls={false}
					/>

					<PlusCircleOutlined
						style={{ fontSize: "50px", color: "darkgray" }}
						onClick={showForm}
					/>

					<Title level={5}>Create a new Bank Account</Title>
				</CardWrapper>
			)}
		</NewAccountWrapper>
	);
};

export default NewAccount;
