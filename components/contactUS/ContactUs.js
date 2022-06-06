import { ContactStyle } from "./styles/ContactUs.styled";
import { Form, Input, Select, Checkbox, Button } from "antd";

const { Option } = Select;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="86">+20</Option>
        <Option value="87">+966</Option>
      </Select>
    </Form.Item>
  );
  return (
    <ContactStyle>
      <h1>Contact Us</h1>
      <h2>We will be happy to assist you on any enquiry</h2>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="formClass"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input size="large" placeholder="what's your name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input size="large" placeholder="what's your email" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            placeholder="what's your phon"
            size="large"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your company!",
            },
          ]}
        >
          <Input size="large" placeholder="What is your company?" />
        </Form.Item>
        <Form.Item
          name="intro"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea
            showCount
            maxLength={100}
            placeholder="Write your message here"
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ textTransform: "uppercase" }}
          >
            send message
          </Button>
        </Form.Item>
      </Form>
    </ContactStyle>
  );
};
export default ContactUs;
