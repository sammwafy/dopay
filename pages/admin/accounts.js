import React from "react";
import Accounts from "../../components/dashboard/admin/accounts/accounts";
import { getLayout } from "../../components/dashboard/Layout/dashboardLayout";

const accounts = () => {
	return <Accounts />;
};
accounts.getLayout = getLayout;
export default accounts;
export const getStaticProps = async (ctx) => {
	return {
		props: {
			data: null,
		},
	};
};
