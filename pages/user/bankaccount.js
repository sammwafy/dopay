import { getLayout } from "../../components/dashboard/Layout/userDashboardLayout.js";
import BankAccounts from "../../components/dashboard/user/bankaccount/bankAccount";
const BankAccount = () => {
  return <BankAccounts />;
};
BankAccount.getLayout = getLayout;
export default BankAccount;
