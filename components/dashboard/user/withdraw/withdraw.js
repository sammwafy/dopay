import React,{useState} from 'react'
import { WithdrawContainer ,Container} from './withdraw.styled'
import { Button,Form, Input , Typography,Space,Modal ,Select} from 'antd' ;
import Image from "next/image";
import arrow from '../../../../public/VectorArrow.svg'
import WithdrawSuccess from './withdrawSuccess'
const { Title , Text } = Typography;
const { Option } = Select;
const Withdraw = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
    showModal()
    setTimeout(() => {
		  setIsModalVisible(false);
		  
		}, 2000);
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
<div className='top'>
    <Image src={arrow} alt='logo' width={50} height={50} />
    <Title level={3} style={{marginLeft:'50px'}}>Withdraw To a Bank Account </Title>
    </div>
   <WithdrawContainer>
    <Form 
    layout='vertical'
      name="payForm"
      requiredMark={false}
     
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="formClass"
    >
      <Form.Item
      labelCol={{
        span: 24,
        offset:4
    }}
  
      
      
        label={<h3 className="label"> Enter Amount </h3>}
        name="payMoney"
        rules={[
          {
            required: true,
            message: 'Please input Money Amount!',
          },
        ]}
      >
       
        <Input  bordered={false} style={{borderBottom:'1px solid  #4C4C4C',textAlign:'center',}}  placeholder='$ 0'  />
      </Form.Item>
     
     
      <Form.Item
        labelCol={{
          span: 24,
          offset:10
      }}
      
      label= {<h3 className="label"> To </h3>}
      name="bankName"
      rules={[
        {
          required: true,
          message: 'Plz Enter Bank Name!',
        },
      ]}
    >
      <Select defaultValue="nationalBank "   style={{ width: 200 }} >
        <Option value="nationalBank">National Bank Of Egypt </Option>
        <Option value="misrBank">BANQUE MISR</Option>
        <Option value=" alexandriaBank  "> Bank of Alexandria </Option>
        <Option value="faisalBank"> Faisal Islamic Bank of Egypt </Option>
      </Select>

    </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className='btn'>
          Send
        </Button>
      </Form.Item>
    </Form>
    <Modal  visible={isModalVisible}  onCancel={handleCancel} footer={null}>
        <WithdrawSuccess/>
      </Modal>
   </WithdrawContainer>
	
   </Container>
  )
}

export default Withdraw