
import {Wrapper} from './pay.styled'
import React from 'react'

import Image from "next/image";
import label from '../../../../public/label.svg';
import { Button,Form, Input , Typography,Select} from 'antd';
const { Option } = Select;
const { Title } = Typography;
const Transfer = ({setShow}) => {
 const onFinish = (values) => {
    console.log('Success:', values);
    setTimeout(() => {
		  setShow(false);
		  
		}, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
    <Form 
    className='formClass'
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
      labelCol={{
        offset: 4,
        span: 16,
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
      
      <div  ><Title level={5}> To</Title> </div> 
      <Form.Item
      
      label='Country'
      name="Country"
      rules={[
        {
          required: true,
          message: 'Plz Choose Country',
        },
      ]}
    >
      <Select defaultValue="Egypt"  style={{ width: 200 }} >
        <Option value="egypt">Egypt</Option>
        <Option value="suez">Suez</Option>
        <Option value="assiut ">Assiut</Option>
        <Option value="alexandria">Alexandria</Option>
      </Select>

    </Form.Item>

    <Form.Item
      
      label='Bank Name'
      name="bankName"
      rules={[
        {
          required: true,
          message: 'Plz Enter Bank Name!',
        },
      ]}
    >
      <Select defaultValue="nationalBank " style={{ width: 200 }} >
        <Option value="nationalBank">National Bank Of Egypt </Option>
        <Option value="misrBank">BANQUE MISR</Option>
        <Option value=" alexandriaBank  "> Bank of Alexandria </Option>
        <Option value="faisalBank"> Faisal Islamic Bank of Egypt </Option>
      </Select>

    </Form.Item>
    
    
    <Form.Item
      
      label='Account Holder Name'
      name="holderName"
      rules={[
        {
          required: true,
          message: 'Plz Enter Account Holder Name!',
        },
      ]}
    >
      <Input placeholder='Account Holder Name'/>
    </Form.Item>
    <Form.Item
      
      label='IBAN'
      name="iban"
      rules={[
        {
          required: true,
          message: 'Plz Enter IBAN!',
        },
      ]}
    >
      <Input placeholder='IBAN'/>
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

export default Transfer