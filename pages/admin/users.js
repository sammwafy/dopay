import Users from "../../components/dashboard/admin/users/Users";
import { getLayout } from "../../components/dashboard/Layout/DashboardLayout";

const users = () => {
	return <Users />;
};
users.getLayout = getLayout;
export default users;
