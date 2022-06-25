import { useEffect, useState } from "react";
import Paytransfer from "./../../components/dashboard/user/paytransfer/paytransfer";
import { getLayout } from "../../components/dashboard/Layout/userDashboardLayout";

import { useUserAccountsMutation } from "../../store/api/getUserAccountsApiSlice";
import Loading from "../../components/loading/loading.js";

const Pay = () => {
  const [getUserAccounts, { isLoading }] = useUserAccountsMutation();
  const [userAccounts, setUserAccounts] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const data = await getUserAccounts().unwrap();
      setUserAccounts(data.map((account) => ({name: account.name, id: account._id})));
    };
    fetchAccount();
  }, []);

  return !isLoading ? (
    <Paytransfer accounts={userAccounts} />
  ) : (
    <Loading/>
  );
};
Pay.getLayout = getLayout;
export default Pay;
