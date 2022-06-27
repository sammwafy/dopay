import React, { useEffect, useState } from "react";
import { WithdrawContainer, Container } from "./withdraw.styled";
import { Button, Form, Input, Typography, Space, Modal, Select } from "antd";
import { Image } from "antd";
import arrow from "../../../../public/VectorArrow.svg";
import WithdrawSuccess from "./withdrawSuccess";
import { useWithdrawAmountMutation } from "../../../../store/api/withdrawAmountApiSlice.js";
import { useUserAccountsMutation } from "../../../../store/api/getUserAccountsApiSlice.js";
import Loading from "../../../loading/loading.js";

const { Title, Text } = Typography;
const { Option } = Select;
const Withdraw = () => {
  const [withDrawAmount, { isLoading }] = useWithdrawAmountMutation();
  const [getUserAccounts, { isLoading: isLoadingAccounts }] =
    useUserAccountsMutation();
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const fetchAccount = async () => {
      const data = await getUserAccounts().unwrap();
      setAccounts(
        data.map((account) => ({ name: account.name, id: account._id }))
      );
    };
    fetchAccount();
  }, []);

  const onFinish = async (withdraw) => {
    const current = new Date();
    const response = await withDrawAmount({
      ...withdraw,
      date: current,
    }).unwrap();
    console.log(response);
    if (!response.error) {
      Modal.success({
        title: "Withdraw Successfully",
        content: `you have successfully withdrawn $${withdraw.value}`,
      });
    } else {
      Modal.error({
        title: "Withdraw Failed",
        content: response.error,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <div className="top">
        <Image src={arrow} alt="logo" width={50} height={50} />
        <Title level={3} style={{ marginLeft: "50px" }}>
          Withdraw From Account
        </Title>
      </div>
      {isLoadingAccounts || isLoading ? (
        <Loading />
      ) : (
        <WithdrawContainer>
          <Form
            layout="vertical"
            name="payForm"
            requiredMark={false}
            initialValues={{
              ["id"]: "choose an account",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="formClass"
          >
            <Form.Item
              labelCol={{
                span: 24,
                offset: 4,
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
                style={{
                  borderBottom: "1px solid  #4C4C4C",
                  textAlign: "center",
                }}
                placeholder="$ 0"
              />
            </Form.Item>

            <Form.Item
              labelCol={{
                span: 24,
                offset: 10,
              }}
              label={<h3 className="label"> To </h3>}
              name="id"
              rules={[
                {
                  required: true,
                  message: "Plz Enter Bank Name!",
                },
              ]}
            >
              <Select style={{ width: 200 }}>
                {accounts &&
                  accounts.map((account, i) => {
                    return (
                      <Option key={i} value={account.id}>
                        {account.name}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Send
              </Button>
            </Form.Item>
          </Form>
        </WithdrawContainer>
      )}
    </Container>
  );
};

export default Withdraw;
