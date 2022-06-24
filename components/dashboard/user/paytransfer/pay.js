import { PayWrapper } from "./pay.styled";
import { wrapper } from "../../../../store/store";

import { Button, Form, Input, Typography, Select, Modal } from "antd";
import { usePayToAccountMutation } from "../../../../store/api/payToAccountApiSlice.js";
const { Option } = Select;
const { Title } = Typography;
const Pay = ({ data }) => {
  const [payToAccount, { isLoading }] = usePayToAccountMutation();

  const onFinish = async (payDetails) => {
    const current = new Date();
    const response = await payToAccount({
      ...payDetails,
      date: current,
    }).unwrap();
    console.log(response);
    if (!response.error) {
      Modal.success({
        title: "payment Successfully",
        content: `you have successfully payed $${payDetails.value} to $${payDetails.toAccountId}`,
      });
    } else {
      Modal.error({
        title: "payment Failed",
        content: response.error,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <PayWrapper>
      <Form
        className="formClass"
        layout="vertical"
        name="payForm"
        requiredMark={false}
        initialValues={{
          remember: true,
          ["Country"]: "egypt",
          ["bankName"]: "nationalBank",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          labelCol={{
            offset: 4,
            span: 16,
          }}
          label={<h3 className="label"> Enter Amount </h3>}
          name="value"
          rules={[
            {
              required: true,
              message: "Please input Money Amount!",
            },
          ]}
        >
          <Input
            bordered={false}
            style={{ borderBottom: "1px solid  #4C4C4C", textAlign: "center" }}
            placeholder="$ 0"
          />
        </Form.Item>
        <div>
          <Title level={5}>Choose your account</Title>{" "}
        </div>
        <Form.Item
          label="Country"
          name="Country"
          rules={[
            {
              required: true,
              message: "Plz Choose Country",
            },
          ]}
        >
          <Select initialValue="egypt" style={{ width: 200 }}>
            <Option value="egypt">Egypt</Option>
            <Option value="suez">Suez</Option>
            <Option value="assiut ">Assiut</Option>
            <Option value="alexandria">Alexandria</Option>
          </Select>
        </Form.Item>

        <div>
          <Title level={5}>To</Title>{" "}
        </div>
        <Form.Item
          label="Country"
          name="Country"
          rules={[
            {
              required: true,
              message: "Plz Choose Country",
            },
          ]}
        >
          <Select initialValue="egypt" style={{ width: 200 }}>
            <Option value="egypt">Egypt</Option>
            <Option value="suez">Suez</Option>
            <Option value="assiut ">Assiut</Option>
            <Option value="alexandria">Alexandria</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Bank Name"
          name="bankName"
          rules={[
            {
              required: true,
              message: "Plz Enter Bank Name!",
            },
          ]}
        >
          <Select style={{ width: 200 }}>
            <Option value="nationalBank">National Bank Of Egypt</Option>
            <Option value="misrBank">BANQUE MISR</Option>
            <Option value="alexandriaBank">Bank of Alexandria</Option>
            <Option value="faisalBank">Faisal Islamic Bank of Egypt</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Account Holder Name"
          name="toAccountHolderName"
          rules={[
            {
              required: true,
              message: "Plz Enter Account Holder Name!",
            },
          ]}
        >
          <Input placeholder="Account Holder Name" />
        </Form.Item>
        <Form.Item
          label="IBAN"
          name="toAccountId"
          rules={[
            {
              required: true,
              min: 5,
              message: "Plz Enter a valid IBAN number!",
            },
          ]}
        >
          <Input placeholder="IBAN" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </PayWrapper>
  );
};




export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {


    await Promise.all(useUserAccountsMutation());

    return { props: { data } }
  }
);

export default Pay;
