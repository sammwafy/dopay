import React, { useEffect } from "react";
import Dashboard from "../../components/dashboard/admin/dashboard/Dashboard";
import { getLayout } from "../../components/dashboard/Layout/dashboardLayout";
import { useCookies } from "react-cookie";
import SignIn from "../../components/sign-in/sign-in";
import Router from "next/router";
const DashboardPage = () => {
	const [cookies, setCookie] = useCookies([""]);
	console.log(cookies.role);

	useEffect(() => {
		// if user is not authenticated, redirect to login page
		// Router.push("/login");
	});

	return <Dashboard />;
};
DashboardPage.getLayout = getLayout;
export default DashboardPage;
