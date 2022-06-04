import React, { useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const White = ({ children }) => {
	return (
		<Layout>
			<Sider
				style={{
					backgroundColor: "white",
					color: "black",
					display: "var(--mobile)",
				}}
			>
				side bar
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "white",
						color: "black",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
						padding: "0px 10px",
					}}
				>
					header
				</Header>
				<Content style={{ overflow: "scroll" }}>{children}</Content>
				<Footer style={{ backgroundColor: "white", color: "black" }}>
					footer
				</Footer>
			</Layout>
		</Layout>
	);
};

export const getLayout = (page) => <White>{page}</White>;
export default White;
