import {
  AppstoreOutlined,
  CarOutlined,
  IdcardOutlined,
  LogoutOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>BYKE</div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        className={styles.menu}
      >
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="users" icon={<UserOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="messages" icon={<MessageOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Item key="delivery" icon={<CarOutlined />}>
          Delivery
        </Menu.Item>
        <Menu.Item key="verify" icon={<IdcardOutlined />}>
          Verify Identity
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          className={styles.logout}
        >
          Log Out
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
