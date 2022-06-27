import { DashboardWrapper } from "./dashboard.styled";
import { BarChart, Bar, Cell, Tooltip } from "recharts";
import { PieChart, Pie } from "recharts";
import { Image } from "antd";
import titleImg from "../../../../public/rightColumnImg.svg";
import { useEffect, useState } from "react";


const Dashboard = () => {

	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	const data2 = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 },
	];
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

	return (
		<DashboardWrapper>
			<div className='title-card'>
				<div className='info'>
					<h3>Welcome to your dashboard</h3>
					<p>
						This is DoPay new Admin Dashboard, build with Flat Design. Enjoy it
						!
					</p>
				</div>
				<Image src={titleImg} width='300' height='200' alt='title' />
			</div>

			<div className='small-chart'>
				<BarChart width={200} height={100} data={data}>
					<Tooltip />
					<Bar dataKey='uv' fill='#8884d8' />
				</BarChart>
			</div>

			<div className='widget-container'>
				<div className='widget'>
					<div className='filter'>
						<h1>30,000$</h1>
						<p>payments process</p>
					</div>
				</div>
				<div className='widget'>
					<div className='filter'>
						<h1>250</h1>
						<p>New Users</p>
					</div>
				</div>
				<div className='widget'>
					<div className='filter'>
						<h1>400,000$</h1>
						<p>sent / withdraw</p>
					</div>
				</div>
			</div>

			<div className='chart'>
				<BarChart
					width={400}
					height={200}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<Tooltip />
					<Bar dataKey='pv' fill='#8884d8' />
					<Bar dataKey='uv' fill='#82ca9d' />
				</BarChart>
			</div>

			<div className='small-chart'>
				<PieChart width={200} height={200}>
					<Pie
						data={data2}
						cx={100}
						cy={100}
						innerRadius={30}
						outerRadius={40}
						fill='#8884d8'
						paddingAngle={5}
						dataKey='value'
						label
					>
						{data2.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
				</PieChart>
			</div>
		</DashboardWrapper>
	);
};

export default Dashboard;
