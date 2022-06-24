import styled from "styled-components";

export const TransactionWrapper = styled.div`
	width: 80%;
	margin: 10px auto;

	padding: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.tableRow {
		&:hover {
			cursor: pointer;
		}
	}
`;
