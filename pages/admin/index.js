import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getLayout } from "../../components/dashboard/Layout/DashboardLayout";

const Index = () => {
	const router = useRouter();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push({ pathname: "admin/users" });
	// 	}, 4000);
	// }, []);

	return <div>index</div>;
};
Index.getLayout = getLayout;
export default Index;
