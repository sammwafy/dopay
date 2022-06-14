import React from 'react'

import { Form, Input, Button, Space, Row,Col} from 'antd';
import { Container } from './userProfile.styled';



const Password = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Container>
    <Space direction="vertical"  size='large'>
        <h2>Password & Security </h2>
        <h5> Change Password</h5>
        <Form
      name="basic"
     
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
       <Row >
       <Col xs={24} xl={11}> 
      <Form.Item
         
        name="oldpassword"
        rules={[
          {
            required: true,
            message: 'Please input your Old Password!',
          },
        ]}
      >
         <Input.Password  placeholder='Old Password'/>
      </Form.Item>
      </Col>
      </Row>
      <Row gutter={14}>
          <Col xs={24} xl={12}>  
          <Form.Item
        
        name="password1"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  placeholder='Password' />
      </Form.Item>
          </Col>
     
          <Col xs={24} xl={12} >  
          <Form.Item
        
        name="password2"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  placeholder='Repeat Password' />
      </Form.Item>
          </Col>
     
     
          
      </Row>
     
      

      <Form.Item  >
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>

        


    </Space>
    </Container>
  )
}


    export default Password