/** @format */

import styled from "styled-components";

export const DashNav = styled.div`
	width: 100%;
	height: 70px;
	color: crimson;
	font-size: 27px;
	/* padding: 0.5em; */
	display: flex;
	align-items: center;
	justify-content: flex-end;
	display: flex;
	@media screen and (max-width: 700px) {
		justify-content: space-between;

		.logo {
			margin: 0 auto;
			display: flex !important;
		}
	}

	.profile {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 7px solid rgba(38, 184, 147, 0.5);
		box-shadow: (0px 10px 4px rgba(0, 0, 0, 0.25));
		display: flex;
		align-items: center;
		justify-content: center;
		.pro {
			border-radius: 50%;
		}
	}
	.img {
		padding-left: 900px;
	}
`;
