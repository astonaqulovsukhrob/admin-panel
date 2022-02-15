import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import ProductModal from "../ProductTable/ProductModal";
import Dashboard from "../Chart/Dashboard";
import CategoresModal from "../Categores/CategoresModal";
import Pages from "../Pages/Pages";
import "antd/dist/antd.css";
import {
  LineChartOutlined,
  FolderOpenOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import PagesTabs from "../Pages/PagesTabs";

const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          className="mt-4"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<LineChartOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserAddOutlined />}>
            <Link to="/categores">Categores</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FolderOpenOutlined />}>
            <Link to="/pages">Pages</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background " style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content className="site-layout-background main">
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/products"} element={<ProductModal />} />
            <Route path={"/categores"} element={<CategoresModal />} />
            <Route path={"/pages"} element={<Pages />} />
          </Routes>
          <div className="tabs">
            <PagesTabs />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
