import { UserDashboardWrapper } from "./userDashboard.styled";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector } from "recharts";
import { Image } from "antd";
import titleImg from "../../../../public/rightColumnImg.svg";
import { AreaChart, Area,} from 'recharts';
import chart from "../../../../public/chart.svg";
import {Typography,Divider} from "antd"
const {Text,Title,Link} = Typography
const UserDashboard = () => {
    
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
		<UserDashboardWrapper>
			

			<div className='title-card'>
				<div className='info'>
					<h3>Welcome to your dashboard</h3>
					<p>
                    This is DoPay new User Dashboard, built with Flat Design. Enjoy it !
					</p>
				</div>
				<Image src={titleImg} width='300' height='150' alt='title' />
			</div>

			<div className='small-chart'>
				<BarChart width={200} height={150} data={data}>
					<Tooltip />
					<Bar dataKey='uv' fill='#8884d8' />
				</BarChart>
			</div>
			
			

			<div className='chart'>
            <AreaChart
          width={250}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
			</div>



			

			<div className='card'>
            
			<div className='img'><Image src={chart} width='300' height='200' alt='title' /> </div>
			<div className='info'> 
            
			<Title level={4} style={{color: '#06AA8D '}}>$480  Total Money </Title>
            <Text> In your wallet</Text>
			<Divider/>

			<Link href="https://ant.design" target="_blank">
			See last transactions 
    </Link>
           

            </div>
			</div>
		</UserDashboardWrapper>
	);
};

export default UserDashboard;
