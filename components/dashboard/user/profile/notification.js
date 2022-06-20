import React from 'react'
import {Space,Switch,Button ,Row,Col} from 'antd'
import { Container } from './userProfile.styled';
const Notification = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    
    <Space direction='vertical' size='large'>
        <h2>Notifications</h2>
        <Row >
            <Col xs={24} xl={11} > 
                <h4> Allow email notification </h4>
                <Switch defaultChecked onChange={onChange}  style={{backgroundColor:"#B4CD93 "}}/>
              
            </Col>
            <Col xs={24} xl={11}> 
                <h4> Allow website notification  </h4>
                <Switch defaultChecked  style={{backgroundColor:"#B4CD93"}}/>
            </Col>
          
            
</Row>
<Button type="primary" htmlType="submit"  style={{backgroundColor:" # B4CD93",marginTop:"100px"}} >
          Submit
        </Button>

        </Space>
        
    
  )
}
export default Notification