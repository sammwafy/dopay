import styled from "styled-components";

export const NewAccountWrapper = styled.div`
	display: flex;
	gap: 20px;
	margin: 10px auto;
	width: 80%;
	flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 350px;
	height: 250px;
	border-radius: 40px;
	background-color: ${(props) => props.color};
	box-shadow: 0px 9px 50px rgba(0, 0, 0, 0.1);
	padding: 20px;
	.img {
		border: 3px red solid;
		height: 50px;
	}
	.image {
		border: 3px green solid;
		width: 100%;
		height: 100%;
	}
	.ant-typography {
		color: white;
		margin: 0px 10px;
	}
	h3.ant-typography {
		margin-top: 0 !important;
	}
`;
