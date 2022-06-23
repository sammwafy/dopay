import { getLayout } from "../../components/dashboard/Layout/userDashboardLayout";
import Recharge from "../../components/dashboard/user/recharge/recharge";

const RechargePage = () => {
  return <Recharge />;
};
RechargePage.getLayout = getLayout;

export default RechargePage;
