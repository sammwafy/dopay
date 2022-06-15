import React from 'react'
import UserDashboardLayout from "../../components/dashboard/Layout/userDashboardLayout"
import BankAccounts from '../../components/dashboard/user/bankaccount/bankAccount'
const BankAccount = () => {
  return (
    <>
  <UserDashboardLayout>
    <BankAccounts/>
    </UserDashboardLayout>
    </>
  )
}

export default BankAccount