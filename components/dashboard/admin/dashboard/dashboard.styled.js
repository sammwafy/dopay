import styled from "styled-components";

export const DashboardWrapper = styled.div`
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
	.chart {
		/* height: 200px; */
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		flex: 2;
	}
	.title-card {
		flex: 1 0 400px;
		display: flex;
		gap: 5px;
		align-items: center;

		/* height: 400px; */
		background-color: #2bebc8;
		padding: 20px;
		border-radius: 5px;
	}
	.widget-container {
		flex: 1 0 100%;
		border-radius: 5px;
		display: flex;
		align-items: center;
		gap: 20px;
		justify-content: center;

		@media screen and (max-width: 700px) {
			flex-direction: column;

			justify-content: center;
			width: 100%;
		}
		.widget {
			width: 30%;
			height: 80px;
			border-radius: 5px;
			/* background-color: white; */
			background-image: url("/17-athletics.svg");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
				0 6px 20px 0 rgba(0, 0, 0, 0.19);
			display: flex;
			flex-direction: column;
			@media screen and (max-width: 700px) {
				width: 80%;
			}
			.filter {
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				border-radius: 5px;

				h1,
				p {
					margin: 5px;
					color: white;
					font-weight: bold;
				}
			}
		}
	}
	.small-chart {
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		flex: 1 0 200px;
	}
`;
