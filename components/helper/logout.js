import { Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import Router from "next/router";

const LogoutButtonWrapper = styled.div`
	button {
		padding: 3px 10px;
		background: #ffa000;
		color: white;
		font-weight: 600;
		border-color: #ffb029;
		&:hover {
			background: #ffb029;
			border-color: #ffa000;
		}
	}
`;

const LogoutButton = () => {
	const [cookies, setCookie, removeCookie] = useCookies([""]);
	const logout = () => {
		removeCookie("token");
		Router.replace("/");
	};
	return (
		<LogoutButtonWrapper>
			<Button onClick={logout}>Logout</Button>
		</LogoutButtonWrapper>
	);
};

export default LogoutButton;
