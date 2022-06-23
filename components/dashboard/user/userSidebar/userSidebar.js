/** @format */
import Image from "next/image";
import React, { useState } from "react";
import {
  DashSide,
  DashSideDrawer,
} from "../../user/userSidebar/userSidebar.styled";
import logo from "../../../../public/logo.svg";
import { Menu, Drawer } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

const UserSideBar = ({ showDrawer, setShowDrawer }) => {
  const router = useRouter();
  const items = [
    getItem("Dashboard", "1", <AppstoreOutlined />, "item", "", "/user"),
    getItem(
      "Bank Account",
      "2",
      <UserOutlined />,
      "item",
      "bankaccount",
      "/user/bankaccount"
    ),
    getItem(
      "Transactions",
      "3",
      <WalletOutlined />,
      "item",
      "transactions",
      "/user/transactions"
    ),
    getItem(
      "Pay / Transfer",
      "4",
      <SettingOutlined />,
      "item",
      "pay",
      "/user/pay"
    ),
    getItem(
      "Withdraw ",
      "5",
      <LogoutOutlined />,
      "item",
      "withdraw",
      "/user/withdraw"
    ),
    getItem(
      "recharge ",
      "6",
      <LogoutOutlined />,
      "item",
      "recharge",
      "/user/recharge"
    ),
  ];

  // const items = [
  //   { key: '1', label: 'Dashboard', path: '/user/' },
  //   { key: '2', label: 'Bank Account', path: '/user/bankaccount' },
  //   { key: '3', label: 'Transactions', path: '/user/transactions' },
  //   { key: '4', label: 'Pay / Transfer', path: '/user/pay' },
  //   { key: '5', label: 'Withdraw', path: '/user/withdraw' },
  //   { key: '6', label: 'recharge', path: '/user/recharge' }
  // ]

  const items2 = [
    getItem("User Settings ", "4", <SettingOutlined />, "item", "userSetting"),
    getItem(" Logout", "5", <LogoutOutlined />, "item", "logout"),
  ];

  // to handle on select over two menu
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(items.find((_item) => _item.path === router.pathname).key);
  }, [router.pathname]);

  //to produce menus items objects
  function getItem(label, key, icon, className, title, path) {
    return {
      key,
      icon,
      label,
      className,
      title,
      path,
    };
  }

  const handleSelect = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    Router.push(clicked.path);
  };

  return (
    <DashSide>
      <div className="logo">
        <Image src={logo} alt="logo" width="100" height="60" />
      </div>
      <Menu
        mode="inline"
        items={items}
        className="menu"
        onClick={handleSelect}
        selectedKeys={[active]}
       
      />
      <Menu
        mode="inline"
        items={items2}
        className="menu"
        selectedKeys={active}
        onClick={handleSelect}
      />
      <button>Dark Mode</button>
      <Drawer
        title="Navigation"
        placement="left"
        width={200}
        height={100}
        onClose={() => setShowDrawer(false)}
        visible={showDrawer}
        style={{ top: "70px" }}
        className="drawer"
      >
        <DashSideDrawer>
          <Menu
            mode="inline"
            items={items}
            className="menu"
            onClick={handleSelect}
            selectedKeys={[active]}
            
          />
          <Menu
            mode="inline"
            items={items2}
            className="menu"
            selectedKeys={active}
            onClick={handleSelect}
          />
          <button>Dark Mode</button>
        </DashSideDrawer>
      </Drawer>
    </DashSide>
  );
};

export default UserSideBar;
