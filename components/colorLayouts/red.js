import React, { useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import {getLayout as getBlueLayout} from './blue'
const Red = ({ children }) => {
	return (
		<Layout>
			<Sider
				style={{
					backgroundColor: "red",
					color: "white",
					display: "var(--mobile)",
				}}
			>
				side bar
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "red",
						color: "white",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
						padding: "0px 10px",
					}}
				>
					header
				</Header>
				<Content style={{ overflow: "scroll" }}>{children}</Content>
				<Footer style={{ backgroundColor: "red", color: "white" }}>
					footer
				</Footer>
			</Layout>
		</Layout>
	);
};
export const getLayout = (page) => getBlueLayout(<Red>{page}</Red>);
export default Red;
