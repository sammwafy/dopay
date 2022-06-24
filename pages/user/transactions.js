import Transactions from "../../components/dashboard/user/transactions/transactions";
import { getLayout } from "../../components/dashboard/Layout/userDashboardLayout";

const TransactionPage = () => {
	return <Transactions />;
};
TransactionPage.getLayout = getLayout;
export default TransactionPage;
