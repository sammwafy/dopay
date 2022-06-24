import { WithdrawRechargeStyle } from "./styles/withdrawRecharge.styled";
import React, { useState } from "react";
import { Typography, Space, Modal, Image } from "antd";
import arrow from "../../../../public/VectorArrow.svg";
// import Withdraw from "../../../../public/withdraw.svg";
// import Reacharge from "../../../../public/recharge.svg";
import Pay from "../paytransfer/pay";
import PaySuccess from "../paytransfer/paySuccess";
import Transfer from "../paytransfer/transfer";

const { Title } = Typography;

const WithdrawRecharge = () => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(<Pay setVisible={setVisible} />);
  const [modalBank, setModalBank] = useState(<Transfer setShow={setShow} />);

  const showModal = () => {
    setVisible(true);
  };
  const showBankModal = () => {
    setShow(true);
  };

  const handleOk = () => {
    setModalText(<PaySuccess />);
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setShow(false);
  };

  return (
    <WithdrawRechargeStyle>
      <div className="top">
        <Title level={3}> Withdraw & Recharge </Title>
      </div>

      <div className="cards">
        <Image
          src="/recharge.svg"
          alt="logo"
          width="400"
          height="280"
          onClick={showModal}
          preview={false}
        />
        <Modal
          title={
            <Space size="large">
              <div>
                <Image src={arrow} alt="logo" width="30" height="30" />
              </div>
              <div>
                <h3> Transfer Money to a DoPay Account </h3>
              </div>
            </Space>
          }
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={null}
        >
          {modalText}
        </Modal>

        <Image
          src="/withdraw.svg"
          alt="logo"
          width="400"
          height="280"
          onClick={showBankModal}
          preview={false}
        />
        <Modal
          title={
            <Space size="large">
              <div>
                <Image src={arrow} alt="logo" width="30" height="30" />
              </div>
              <div>
                <h3>Withdraw To a Bank Account</h3>{" "}
              </div>
            </Space>
          }
          visible={show}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={null}
        >
          {modalBank}
        </Modal>
      </div>
    </WithdrawRechargeStyle>
  );
};
export default WithdrawRecharge;
