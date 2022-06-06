import React from 'react'
import { Typography ,Space } from 'antd';
import { PayContainer } from './pay.styled'
import Image from "next/image";
const { Title } = Typography;

const Paytransfer = () => {
  return (
    <PayContainer>
      <Space direction="vertical"  >
<div className='top'>
<Title level={3}> Payments &  Transfer </Title>
</div>
<div className='bottom'>
<Image
						src='/imgs/Balance card.png'
						alt='logo'
						width='400'
						height='250'
						className='first'
					/>
<Image
						src='/imgs/Balance card.png'
						alt='logo'
						width='400'
						height='250'
						className='first'
					/>

</div>
        </Space>
    </PayContainer>
  )
}

export default  Paytransfer