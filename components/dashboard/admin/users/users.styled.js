import styled from "styled-components";

export const UserWrapper = styled.div`
	padding: 20px;
	margin: 10px auto;
	display: flex;
	width: 100%;

	.table-image {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 150px;
		cursor: pointer;
		transition: font-size 2s;
		&:hover {
			.btn-view {
				font-size: larger;
			}
		}

		.pro {
			border-radius: 50%;
			border: 5px solid lightgray !important;
		}
	}
	.modal {
		.ant-btn-primary {
			background-color: #b4cd93 !important;
			color: black;
		}
	}
`;
