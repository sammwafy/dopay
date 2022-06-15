import styled from "styled-components";

export const UserDashboardWrapper  = styled.div`
	padding: 10px;
	margin: 0 auto;
	width: 80%;
	${(props) => `height: calc(100vh - 70px);`}
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	@media screen and (max-width: 700px) {
		/* flex-direction: column; */
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.title-card {
		flex: 2 0 400px;
		display: flex;
		gap: 5px;
		align-items: center;

		/* height: 400px; */
		background-color: #2bebc8;
		padding: 20px;
		border-radius: 5px;
		@media screen and (max-width: 700px) {
			order: 1;
		}
	}
	
	.small-chart{
		width:250px;
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		@media screen and (max-width: 700px) {
			width:100%;
			order: 2;
		}

	}



	.chart {
		/* height: 200px; */
		width:250px;
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		flex: 2;
		justify-content: center;
		display: flex;
		align-items: center;
		@media screen and (max-width: 700px) {
			width:100%;
			order: 4;
		}
	}
	
	
	.card {
		height:150px;
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		flex: 2 0 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		@media screen and (max-width: 700px) {
			order: 3;
			width:100%
		}
		.info{
			width:100%;
			
		}
	}
`;
