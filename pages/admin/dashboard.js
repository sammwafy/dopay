import React from "react";
import Dashboard from "../../components/dashboard/admin/dashboard/Dashboard";
import {
	getLayout,
} from "../../components/dashboard/Layout/DashboardLayout";

const dashboard = () => {
	return <Dashboard />;
};
dashboard.getLayout = getLayout;
export default dashboard;
