import React, { useState } from "react";
import { Typography, Space, Modal } from "antd";
import { PayContainer } from "./pay.styled";
import Image from "next/image";
import arrow from "../../../../public/VectorArrow.svg";
import bankcard from "../../../../public/bankcard.svg";
import dopaycard from "../../../../public/dopaycard.svg";
import Pay from "./pay";
import PaySuccess from "./paySuccess";
import Transfer from "./transfer";
const { Title } = Typography;

const Paytransfer = () => {
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
        <Image
          src={dopaycard}
          alt="logo"
          width="400"
          height="280"
          onClick={showTransfer}
        />

        <Image
          src={bankcard}
          alt="logo"
          width="400"
          height="280"
          onClick={showPay}
        />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isPay ? <Pay /> : isTransfer ? <Transfer /> : null}
      </Modal>
    </PayContainer>
  );
};

export default Paytransfer;
