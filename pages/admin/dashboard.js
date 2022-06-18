import React, { useEffect } from "react";
import Dashboard from "../../components/dashboard/admin/dashboard/Dashboard";
import { getLayout } from "../../components/dashboard/Layout/DashboardLayout";
import { useCookies } from "react-cookie";
import SignIn from "../../components/sign-in/sign-in";
import Router from "next/router";
const DashboardPage = () => {
	const [cookies, setCookie] = useCookies([""]);
	console.log(cookies.role);

	useEffect(() => {
		// if user is not authenticated, redirect to login page
		console.log("here");
		if (!cookies.role) Router.push("/user");
	});

	return <Dashboard />;
};
DashboardPage.getLayout = getLayout;
export default DashboardPage;
