import React,{useState} from 'react'
import { Typography ,Space,Modal } from 'antd';
import { PayContainer } from './pay.styled'
import Image from "next/image";
import arrow from '../../../../public/VectorArrow.svg'
import bankcard from '../../../../public/bankcard.svg'
import dopaycard from '../../../../public/dopaycard.svg'
import Pay from './pay'
import PaySuccess from './paySuccess';
import Transfer from './transfer'
const { Title } = Typography;

const Paytransfer = () => {
	const [visible, setVisible] = useState(false);
	const [show, setShow] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState(<Pay setVisible={setVisible}/>)
	const[modalBank,setModalBank] = useState(<Transfer setShow={setShow}/>)

	const showModal = () => {
		setVisible(true);
	  };
	  const showBankModal = () => {
		setShow(true);
	  };
	
	  const handleOk = () => {
		setModalText(<PaySuccess/>);
		setConfirmLoading(true);
		setTimeout(() => {
		  setVisible(false);
		  setConfirmLoading(false);
		}, 2000);
	  };
	
	  const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false);
		setShow(false)
	  };

	
  return (
	  <PayContainer>
	
	<div className='top'>
		<Title level={3}> Payments &  Transfer </Title>
	</div> 

	 
   
		   
	 <div className='cards'>
	 <Image src={dopaycard} alt='logo' width='400' height='280'  onClick={showModal} />
			    <Modal
				 title={<Space size='large'> 
				 <div>
                  <Image src={arrow} alt='logo' width='30' height='30' />
			     </div>
			<div ><h3 > Transfer Money to a DoPay Account  </h3> </div>
		   </Space> }
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
		footer={null}
      >
        {modalText}
      </Modal>
   
   
   <Image src={bankcard} alt='logo' width='400' height='280' onClick={showBankModal} />
   <Modal
				 title={<Space size='large'> 
				 <div>
                  <Image src={arrow} alt='logo' width='30' height='30' />
			     </div>
			<div ><h3 >Withdraw To a Bank Account</h3> </div>
		   </Space> }
		    
        visible={show}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
		footer={null}
      >
        {modalBank}
      </Modal>
   </div>
		   
   
   
		   </PayContainer>
   
  )
}

export default  Paytransfer