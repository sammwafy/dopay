import React from 'react'

import { Image } from "antd";
import done from '../../../../public/Done.svg'
import { Typography ,Space } from 'antd';



const { Title  , Text } = Typography;

const WithdrawSuccess = ({amount}) => {
  return ( 
  <Space align="center" direction='vertical' size='large' style={{alignItems:'center'}}>
      <Image src={done} alt='done' width={50} height={50}/>
     <Text> You have successfully withdrawn ${amount}</Text>
    </Space>
  )
}

export default WithdrawSuccess