import React from 'react'

import Image from "next/image";
import done from '../../../../public/Done.svg'
import { Typography ,Space } from 'antd';



const { Title  , Text } = Typography;

const WithdrawSuccess = () => {
  return ( 
  <Space direction='vertical' size='large' style={{alignItems:'center'}}>
      <Image src={done} alt='done' width={50} height={50}/>
     <Text> You have successfully sent $99 to Sameh Hassan bank Account</Text>
    </Space>
  )
}

export default WithdrawSuccess