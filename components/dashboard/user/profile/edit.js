import React, { useState } from 'react';
import { Tabs, Radio, Space,Select } from 'antd';
const { TabPane } = Tabs;
import { Button, Form, Input ,Row,Col,  DatePicker,} from 'antd';
import { Container } from './userProfile.styled';

    


  
 
const { Option } = Select;

const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


 
 export const Edit = () => {
   return (
     <Container>
      <h2> Edit Profile </h2>
      <div  className='userform' >
      <Form
      name="userForm"
      colon={false}
      layout='vertical'
      onFinish={onFinish}
      requiredMark={false}
      
    >
      <Row gutter={16}>
      <Col xs={24} xl={8}>
          <h4> Personal</h4>
          <Row gutter={14}>
        <Col xs={24} xl={12}>
        <Form.Item
        
        name="firstname"
        label='First Name'
        rules={[
          {
            required: true,
            message: 'The name is required.',
          },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: 'Name can only include letters and numbers.',
          },
        ]}
       
      >
        <Input />
      </Form.Item>
        </Col>
        <Col xs={24} xl={12} >
        <Form.Item
        label="Sur Name"
        name="surname"
        rules={[
          {
            required: true,
            message: 'The name is required.',
          },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: 'Name can only include letters and numbers.',
          },
        ]}
      >
        <Input />
      </Form.Item>
        </Col>
      </Row>
      
      <Form.Item
        
        name="nationalcode"
        label='National Code'
      >
        <Input />
      </Form.Item>
      <Form.Item
        
        name="birth"
        label='Date Of Birth'
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        
        name="education"
        label='Education Level'
      >
        <Input />
      </Form.Item>
    </Col>
    <Col xs={24} xl={8}>
        <h4>Contact</h4>
      <Form.Item
        
        name="email"
        label='Email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        
        name="country"
        label='Country'
      >
        <Input />
      </Form.Item>
      <Form.Item
        
        name="city"
        label='City'
      >
        <Select
        defaultValue="cairo"
        
      >
        <Option value="cairo">Cairo</Option>
        <Option value="suez">Suez</Option>
        <Option value="assiut ">Assiut</Option>
        <Option value="alexandria">Alexandria</Option>
      </Select>

      </Form.Item>
      <Form.Item
        label='Phone Number'
        
      >
        <Input.Group compact  >
        
      <Select
        defaultValue="+20"
        style={{
          width: '42%',
        }}
      >
        <Option value="10">10</Option>
        <Option value="11">11</Option>
        <Option value="12">12</Option>
        <Option value="15">15</Option>
      </Select>

      <Form.Item  style={{
          width: '58%',
        }}
        
        name="phone"
        
      >
        <Input />
      </Form.Item>
      
    </Input.Group>
      </Form.Item>

    </Col>
     
    </Row> 
      
      <Form.Item
        
      >
        
        <Button htmlType="submit"  style={{backgroundColor: ' #06AA8D ' ,color:'white'}}>Submit</Button>
      </Form.Item>
    </Form>
    </div>
       
     </Container>
   )
 }
 

