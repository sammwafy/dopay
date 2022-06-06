import { CreateAccFormStyle } from "./styles/createAccForm.styled";
import { Form, Input, Select, Checkbox, Button, Radio } from "antd";
import Image from "next/image";
import CafImg from "../../../public/caf.svg";
const { Option } = Select;

const CreateAccForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
        <Form.Item name="radio-group" label="Bank Account Type">
          <Radio.Group className="radio">
            <Radio value="a">Personal</Radio>
            <Radio value="b">Business</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="select1"
          label="Country"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="">
            <Option value="egypt">egypt</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="select2"
          label="Bank Name"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select bank name!",
            },
          ]}
        >
          <Select placeholder="">
            <Option value="ahly bank">ahly bank egypt</Option>
            <Option value="cib">cib</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Account Holder Name"
          label="Account Holder Name"
          rules={[
            {
              required: true,
              message: "Please write your name!",
            },
          ]}
        >
          <Input size="large" placeholder="sameh-hasan" />
        </Form.Item>
        <Form.Item
          name="IBAN"
          label="IBAN"
          rules={[
            {
              required: true,
              message: "Please input your company!",
            },
          ]}
        >
          <Input size="large" placeholder="IBAN NUM" />
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
