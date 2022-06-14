/** @format */

import styled from "styled-components";

export const DashSide = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: crimson;
	font-size: 27px;
	gap: 20px;
	align-items: center;
	.logo {
		width: 100%;
		height: 65px;
		background-color: #ececec;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu {
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-content: center; */
		/* gap: 30px; */
		.item {
			&:hover,
			&:active,
			&:focus {
				background-color: #b4cd93;
				color: black;
			}
		}
		.ant-menu-item-selected {
			background-color: #b4cd93;
			color: black;
		}
	}
	.ant-menu-inline .ant-menu-item::after {
		border-right: 3px solid green;
	}
	button {
		width: 150px;
		height: 50px;
		margin-top: 30px;
		padding: 0.5rem 1rem;
		color: black;
		border: 1px solid black;
		padding: 12px 23px;
		background-color: white;
		border-radius: 8px;
		font-size: 18px;
	}
`;

export const DashSideDrawer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: crimson;
	font-size: 27px;
	gap: 20px;
	align-items: center;
	.logo {
		width: 100%;
		height: 65px;
		background-color: #ececec;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu {
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-content: center; */
		/* gap: 30px; */
		.item {
			&:hover,
			&:active,
			&:focus {
				background-color: #b4cd93;
				color: black;
			}
		}
		.ant-menu-item-selected {
			background-color: #b4cd93;
			color: black;
		}
	}
	.ant-menu-inline .ant-menu-item::after {
		border-right: 3px solid green;
	}
	button {
		width: 150px;
		height: 50px;
		margin-top: 200px;
		padding: 0.5rem 1rem;
		color: black;
		border: 1px solid black;
		padding: 12px 23px;
		background-color: white;
		border-radius: 8px;
		font-size: 18px;
	}
`;
