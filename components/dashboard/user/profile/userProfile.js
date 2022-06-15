import React, { useState } from 'react';
import { Tabs, Radio, Space ,Y} from 'antd';
const { TabPane } = Tabs;
import { Button, Form, Input ,Row,Col} from 'antd';
import Image from 'next/image'
import {Typography,Divider} from "antd"

import logo from "../../../../public/admin.jpeg";
import styled from "styled-components"
import { Container } from './userProfile.styled';

import Password from './password';
    
import {Select, InputNumber,DatePicker,  AutoComplete, Cascader, Tooltip,} from 'antd';
import { Edit } from './edit';
import Notification from './notification'
  const { Option } = Select;

 


  const {Text,Title,Link} = Typography



const UserProfile = () => {
    return (
      
    <Container>
   <div className='top'>
       <div className='profile'>
          <Image src={logo} alt='logo' width={60} height={60}  className='img'/> 
          </div>
   
   <div  className='info'>
   <h4 > Sameh Hassan </h4>
            <p> Your account is ready, you can now apply for advice.  </p>
   </div>
   
   </div>
   <div className='bottom'>
   <Tabs tabPosition= 'left'  >
        <TabPane tab="Edit Profile" key="1"  >
            <Edit/>
     </TabPane>
        <TabPane tab="Notifications" key="2"  >
        <Notification/>
        </TabPane>
        <TabPane tab="Password & Security" key="3"  >
        <Password/>
        </TabPane>
      </Tabs>
   </div>

    </Container>
      
    )
  }
  
  export default UserProfile