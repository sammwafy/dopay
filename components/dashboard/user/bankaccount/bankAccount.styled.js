import styled from 'styled-components'


export const NewAccountWrapper = styled.div`
	display: flex;
	gap: 10px;
	margin: 10px auto;
	width: 90%;
	flex-wrap:wrap;
    align-items: center;
    justify-content: center;
		
	
	
		.chart {
		height: 200px; 
		width:300px;
		background-color: white;
		
		border-radius: 15px;
		
		justify-content: center;
		display: flex;
		align-items: center;
		flex-direction:column;
		
		
		
		.top{
			width :100%;
			display: flex;
		align-items: center;
		justify-content: center;
		padding:0px 20px;
		
		.left{
			display: flex;
			flex:1;
			flex-direction:column;
			h5.ant-typography {
		color:green;
	}
			
		}
		.right{
			display: flex;
			flex:2;
			padding:0px 10px;
			justify-content: space-between;
		}
		}

	
	}
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 300px;
	height: 200px;
	border-radius: 40px;
	background-color: ${(props) => props.color};
	box-shadow: 0px 9px 50px rgba(0, 0, 0, 0.1);
	padding: 30px;
	
	.ant-typography {
		color: white;
		margin: 0px 10px;
		
	}
	h3.ant-typography {
		margin-top: 0 !important;
		margin-bottom: -30px !important;
	}
`;


export const BlankCardWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 300px;
	height: 200px;
	border-radius: 40px;
	background-color: white;
	box-shadow: 0px 9px 50px rgba(0, 0, 0, 0.1);
	padding: 20px;
	align-items: center;
    justify-content: center;
	
	.ant-typography {
		color: '#808080';
		margin: 0px 10px;
	}
	
`;

export const Wrapper= styled.div`
display:flex;
align-items:center;
justify-content:center;
.ant-typography {
        color:  green ;
        
    }

`;