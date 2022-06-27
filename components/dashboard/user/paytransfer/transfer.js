import { Button, Form, Input, Select, Typography, message, Modal } from "antd";
import { Image } from "antd";
import label from "../../../../public/label.svg";
import PaySuccess from "./paySuccess";
import { PayWrapper } from "./pay.styled";
import { useTransferToAccountMutation } from "../../../../store/api/transferMoneyApiSlice";
const { Title } = Typography;
const { Option } = Select;
import Loading from "../../../loading/loading";
const Transfer = ({ accounts }) => {
  const [transferToAccount, { isLoading }] = useTransferToAccountMutation();

  const onFinish = async (transferDetails) => {
    if (transferDetails.fromAccountId === transferDetails.toAccountId) {
      return message.error("cannot transfer to same account!");
    }

    const current = new Date();
    const response = await transferToAccount({
      ...transferDetails,
      date: current,
    }).unwrap();

    if (!response.error) {
      Modal.success({
        title: "payment Successfully",
        content: `you have successfully payed $${transferDetails.value} to $${transferDetails.toAccountId}`,
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
      {isLoading ? (
        <Loading />
      ) : (
        <Form
          className="formClass"
          layout="vertical"
          name="payForm"
          requiredMark={false}
          initialValues={{
            ["fromAccountId"]: "choose an account",
            ["toAccountId"]: "choose an account",
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

          <div>
            <Title level={5}>transfer from account to another</Title>{" "}
          </div>
          <Form.Item
            label="From"
            name="fromAccountId"
            rules={[
              {
                required: true,
                message: "Plz Choose Country",
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
          <Form.Item
            label="To"
            name="toAccountId"
            rules={[
              {
                required: true,
                message: "Plz Choose Country",
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
      )}
    </PayWrapper>
  );
};

export default Transfer;
