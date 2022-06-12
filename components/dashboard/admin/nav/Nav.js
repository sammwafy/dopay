import Image from "next/image";
import { DashNav } from "./nav.styled";
import {
	BellOutlined,
	DownOutlined,
	SmileOutlined,
	MenuOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Badge, Button } from "antd";
import Link from "next/link";
import logo from "../../../../public/logo.svg";
import io from "Socket.IO-client";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../store/notification/notificationSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
let socket;

const Nav = ({ showDrawer, setShowDrawer }) => {
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: (
						<Link href='/'>
							<a>Profile</a>
						</Link>
					),
				},
				{
					key: "2",
					label: (
						<Link href='/'>
							<a>Setting</a>
						</Link>
					),
					icon: <SmileOutlined />,
				},
				{
					key: "3",
					label: (
						<Link href='/'>
							<a>Logout</a>
						</Link>
					),
					disabled: true,
				},
				{
					key: "4",
					danger: true,
					label: "a danger item",
				},
			]}
		/>
	);

	//trying realtime notification

	const dispatch = useDispatch();
	const notification = useSelector((state) => state.notification);
	const [userName, setUserName] = useState(null);
	const menuItems = input?.map((e, i) => {
		return {
			key: i,
			label: (
				<Link href='/'>
					<a>{e}</a>
				</Link>
			),
		};
	});
	const notificationMenu = <Menu items={menuItems} />;

	const socketInitializer = async () => {
		await fetch("/api/socket");
		socket = io();

		console.log(socket);

		socket.on("connect", () => {
			console.log("connected");
		});

		//get users logged to the site from server event "getNotification"....
		socket.on("getNotification", (msg) => {
			dispatch(addNotification(msg));
		});
	};
	useEffect(() => {
		socketInitializer();
	}, []);

	const onChange = (e) => {
		e.preventDefault();
		setUserName(e.target.value);
	};

	const onClick = (e) => {
		e.preventDefault();
		//let server know the userName login through event "login"......
		socket.emit("login", userName);
	};

	console.log("notification is ", notification);
	console.log("input is ", input);
	console.log(userName);

	return (
		<DashNav>
			<div
				style={{ display: "flex", flexDirection: "column", padding: "20px" }}
			>
				<input type='text' onChange={onChange} />
				<Button onClick={onClick}>login</Button>
			</div>
			{showDrawer && (
				<CloseOutlined
					style={{ display: "var(--desktab)", color: "black" }}
					onClick={() => setShowDrawer(false)}
				/>
			)}
			{showDrawer || (
				<MenuOutlined
					style={{ display: "var(--desktab)", color: "black" }}
					onClick={() => setShowDrawer(true)}
				/>
			)}
			<div style={{ display: "var(--desktab)" }} className='logo'>
				<Image src={logo} alt='logo' width='100' height='60' />
			</div>

			<Dropdown
				overlay={notificationMenu}
				style={{ display: "var(--mobile)" }}
				trigger={["click"]}
			>
				<Badge count={notification.length} style={{ display: "var(--mobile)" }}>
					<BellOutlined
						style={{
							fontSize: "30px",
							color: "black",
							display: "var(--mobile)",
						}}
					/>
				</Badge>
			</Dropdown>

			<Dropdown
				overlay={menu}
				style={{ display: "var(--mobile)" }}
				trigger={["click"]}
			>
				<div className='profile'>
					<Image
						src='/admin.jpeg'
						alt='logo'
						width='50'
						height='50'
						className='pro'
					/>
				</div>
			</Dropdown>
			<Dropdown overlay={menu} style={{ display: "var(--mobile)" }}>
				<DownOutlined
					style={{
						fontSize: "30px",
						color: "black",
						display: "var(--mobile)",
					}}
				/>
			</Dropdown>
		</DashNav>
	);
};

export default Nav;
