import { SettingFilled } from "@ant-design/icons";
import { Button, Image, Row, Popover, Switch } from "antd";
import Link from "next/link.js";
import { MainHeaderWrapper } from "./styles/mainHeader.styled.js";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher.js";
import Logout from "../helper/logout.js";
import { getCookie } from "cookies-next";

const MainHeader = () => {
  const token = getCookie("token");
  return (
    <MainHeaderWrapper>
      <Row>
        <div className="logo">
          <Link href="/">
            <Image
              src="imgs/landing/logo.png"
              alt="dopay logo"
              preview={false}
            />
          </Link>
        </div>

        <div className="rightHeader">
          {!token && (
            <>
              <Link href="/login">
                <h1 style={{ cursor: "pointer" }}>Login</h1>
              </Link>

              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
          {token && <Logout />}
          <ThemeSwitcher />
        </div>
      </Row>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
