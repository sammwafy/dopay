import React from 'react'
import {Space,Switch,Button} from 'antd'
import { Container } from './userProfile.styled';
const Notification = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <Container>
    
        <h2>Notifications</h2>
        <div  style={{display:'flex',width:'200%',justifyContent:"space-between"}} className='notification'  >
            <div className='left'> 
                <h4> Allow email notification </h4>
                <Switch defaultChecked onChange={onChange}  style={{backgroundColor:"#B4CD93 "}}/>
            </div>
            <div className='right'> 
                <h4> Allow website notification  </h4>
                <Switch defaultChecked  style={{backgroundColor:"#B4CD93"}}/>
            </div>
            </div>
            <Button type="primary" htmlType="submit"  style={{backgroundColor:" # B4CD93",marginTop:"100px"}} >
          Submit
        </Button>

    
    </Container>
  )
}

export default Notification