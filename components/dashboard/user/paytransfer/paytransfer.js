import React, { useState } from "react";
import { Typography, Space, Modal, Image } from "antd";
import { PayContainer } from "./pay.styled";

import Pay from "./pay";
import PaySuccess from "./paySuccess";
import Transfer from "./transfer";
const { Title } = Typography;

const Paytransfer = ({accounts}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);
  const [isPay, setIsPay] = useState(false);

  const showTransfer = () => {
    setIsPay(false);
    setIsTransfer(true);
    setIsModalVisible(true);
  };
  const showPay = () => {
    setIsTransfer(false);
    setIsPay(true);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <PayContainer>
      <div className="top">
        <Title level={3}> Payments & Transfer </Title>
      </div>

      <div className="cards">
        {/* <Image
          src="/imgs/dopaycard1.svg"
          alt="logo"
          width="280px"
          height="170px"
          onClick={showTransfer}
          preview={false}
        /> */}

        <Image
          src="/imgs/bankcard1.svg"
          alt="logo"
          width="280px"
          height="170px"
          onClick={showPay}
          preview={false}
        />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isPay ? <Pay accounts={accounts}/> : isTransfer ? <Transfer accounts={accounts}/> : null}
      </Modal>
    </PayContainer>
  );
};

export default Paytransfer;
