import React from 'react'
import { Button,Form, Input , Typography} from 'antd';
import Image from "next/image";
import label from '../../../../public/label.svg';
import PaySuccess from './paySuccess';
import {Wrapper} from './pay.styled'

const { Title } = Typography;
const Pay = ({setVisible}) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
		  setVisible(false);
		  
		}, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Wrapper>
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
    </Wrapper>
  
  )
}

export default Pay 