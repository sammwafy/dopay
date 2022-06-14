import React,{useState} from 'react'
import { WithdrawContainer} from './withdraw.styled'
import { Button,Form, Input , Typography,Space,Modal} from 'antd';
import Image from "next/image";
import arrow from '../../../../public/VectorArrow.svg'
const { Title } = Typography;
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
    <Space direction='vertical'>
		  <Space size='large'>
			  <Image src={arrow} alt='logo' width={50} height={50}/>
	  <Title level={4}>Withdraw To a Bank Account </Title>
	  </Space>
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
    >
      <Form.Item
      
        label={
        <div style={{display:'flex', flexDirection:'column',alignItems:"center"}} > 
        <div ><Title level={3}> Enter Amount </Title> </div>
       
          </div> 
          }
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
        offset: 9,
        span: 16,
      }}
        label={ <div ><Title level={3}> To </Title> </div>}
        name="user"
        rules={[
          {
            required: true,
            message: 'Please input user',
          },
        ]}
      >
        <Input/>
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
    <Modal title="Basic Modal" visible={isModalVisible}  onCancel={handleCancel} footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
   </WithdrawContainer>
	</Space>

  )
}

export default Withdraw