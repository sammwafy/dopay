import BankAccounts from "../../components/dashboard/user/bankaccount/bankAccount";
import { getLayout } from "../../components/dashboard/Layout/userDashboardLayout";

const BankAccount = () => {
	return <BankAccounts />;
};
BankAccount.getLayout = getLayout;
export default BankAccount;
