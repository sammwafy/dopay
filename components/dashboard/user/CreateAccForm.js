import { CreateAccFormStyle } from "./styles/createAccForm.styled";
import { Form, Input, Select, Checkbox, Button, Radio } from "antd";
import Image from "next/image";
import CafImg from "../../../public/caf.svg";
const { Option } = Select;

const CreateAccForm = ({setIsModalVisible ,setShow}) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalVisible(false);
    setShow(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CreateAccFormStyle>
      <div className="caf-img">
        <Image src={CafImg} alt="cafimg" />
      </div>
      <div className="title">
        <h1>Add a new bank account</h1>
      </div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="formClass"
      >
        <Form.Item
          name="radio-group"
          label={<h3 className="label">Bank Account Type</h3>}
        >
          <Radio.Group className="radio">
            <Radio value="a">Personal</Radio>
            <Radio value="b">Business</Radio>
          </Radio.Group>
        </Form.Item>
        
        
        
        <Form.Item
          name="Amount"
          label={<h3 className="label">Amount</h3>}
        
        >
          <Input size="large" placeholder="0 $" />
        </Form.Item>
        
        <Form.Item name="agree" valuePropName="check1">
          <Checkbox>
            I agree to the <span>Terms and Conditions *</span>
          </Checkbox>
        </Form.Item>
        <Form.Item name="confirm" valuePropName="check2">
          <Checkbox>I confirm the bank account details above</Checkbox>
        </Form.Item>
        <Form.Item className="ptn">
          <Button
            type="primary"
            htmlType="submit"
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
