import styled from "styled-components";

export const UserCardWrapper = styled.div`
	width: 500px;
	height: 400px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	.user-title {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 32px;
		/* or 200% */

		text-align: center;
	}
	img {
		border-radius: 50%;
		border: 5px solid lightgrey;
	}
	.user-status {
		display: flex;
		gap: 50px;
	}
`;
