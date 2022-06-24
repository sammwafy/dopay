import React from "react";
import { Button, Form, Input, Typography, Select, Image } from "antd";
import { Wrapper } from "./bankAccount.styled.js";
const { Option } = Select;
const { Title } = Typography;

const AccountForm = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Wrapper>
			<Image src='./Vector.svg' alt='bank' />

			<Form
				layout='vertical'
				name='payForm'
				requiredMark={false}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Bank Name'
					name='bankName'
					rules={[
						{
							required: true,
							message: "Plz Enter Bank Name!",
						},
					]}
				>
					<Select defaultValue='nationalBank '>
						<Option value='nationalBank'>National Bank Of Egypt </Option>
						<Option value='misrBank'>BANQUE MISR</Option>
						<Option value=' alexandriaBank  '> Bank of Alexandria </Option>
						<Option value='faisalBank'> Faisal Islamic Bank of Egypt </Option>
					</Select>
				</Form.Item>
				<Form.Item
					label='Country'
					name='Country'
					rules={[
						{
							required: true,
							message: "Plz Choose Country",
						},
					]}
				>
					<Select defaultValue='Egypt'>
						<Option value='egypt'>Egypt</Option>
						<Option value='suez'>Suez</Option>
						<Option value='assiut '>Assiut</Option>
						<Option value='alexandria'>Alexandria</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label='Account Holder Name'
					name='holderName'
					rules={[
						{
							required: true,
							message: "Plz Enter Account Holder Name!",
						},
					]}
				>
					<Input placeholder='Account Holder Name' />
				</Form.Item>
				<Form.Item
					label='IBAN'
					name='iban'
					rules={[
						{
							required: true,
							message: "Plz Enter IBAN!",
						},
					]}
				>
					<Input placeholder='IBAN' />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type='primary' htmlType='submit'>
						Send
					</Button>
				</Form.Item>
			</Form>
		</Wrapper>
	);
};

export default AccountForm;
