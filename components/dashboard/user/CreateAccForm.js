import { CreateAccFormStyle } from "./styles/createAccForm.styled";
import { Form, Input, Select, Checkbox, Button, Radio } from "antd";
import { Image } from "antd";
import CafImg from "../../../public/caf.svg";
import { useCreateNewAccountMutation } from "../../../store/api/createNewAccountApiSlice";
import { useCookies } from "react-cookie";
const { Option } = Select;

const CreateAccForm = ({ setIsModalVisible }) => {
	const [cookies, setCookie, removeCookie] = useCookies([""]);
	const [createNewAccount, { isLoading }] = useCreateNewAccountMutation();

	const onFinish = async (values) => {
		console.log({ ...values, userId: cookies.id });
		try {
			let response = await createNewAccount({ ...values, userId: cookies.id });

			setIsModalVisible(false);
		} catch (error) {
			console.log(error);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<CreateAccFormStyle>
			<div className='caf-img'>
				<Image src={CafImg} alt='cafimg' />
			</div>
			<div className='title'>
				<h1>Add a new bank account</h1>
			</div>
			<Form
				name='basic'
				initialValues={{
					remember: true,
				}}
				layout='vertical'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
				className='formClass'
			>
				<Form.Item
					name='type'
					label={<h3 className='label'>Bank Account Type</h3>}
				>
					<Radio.Group className='radio'>
						<Radio value='personal'>Personal</Radio>
						<Radio value='business'>Business</Radio>
					</Radio.Group>
				</Form.Item>

				<Form.Item name='balance' label={<h3 className='label'>Balance</h3>}>
					<Input size='large' placeholder='0 $' />
				</Form.Item>

				<Form.Item name='agree' valuePropName='check1'>
					<Checkbox>
						I agree to the <span>Terms and Conditions *</span>
					</Checkbox>
				</Form.Item>
				<Form.Item name='confirm' valuePropName='check2'>
					<Checkbox>I confirm the bank account details above</Checkbox>
				</Form.Item>
				<Form.Item className='ptn'>
					<Button
						type='primary'
						htmlType='submit'
						style={{
							textTransform: "uppercase",
						}}
					>
						Save Account
					</Button>
				</Form.Item>
			</Form>
		</CreateAccFormStyle>
	);
};
export default CreateAccForm;
