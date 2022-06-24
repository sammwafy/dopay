import React from "react";
import { Button, Form, Input, Typography } from "antd";
import Image from "next/image";
import label from "../../../../public/label.svg";
import PaySuccess from "./paySuccess";
import { Wrapper } from "./pay.styled";
import {usePayToAccountMutation} from "../../../../store/api/payToAccountApiSlice";
const { Title } = Typography;

const Transfer = ({ setVisible }) => {
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
    <Wrapper>
      <Form
        className="formClass"
        layout="vertical"
        name="payForm"
        requiredMark={false}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          labelCol={{
            offset: 5,
            span: 16,
          }}
          label={<h3 className="label">Enter Amount</h3>}
          name="payMoney"
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

        <Form.Item
          labelCol={{
            offset: 10,
            span: 16,
          }}
          label={<h3 className="label">To</h3>}
          name="user"
          rules={[
            {
              required: true,
              message: "Please input user",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Transfer;
