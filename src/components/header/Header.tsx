import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      {/* Menu Icon */}
      <MenuOutlined className={styles.menuIcon} />

      {/* Search Bar */}
      <Input
        prefix={
          <AiOutlineSearch style={{ marginRight: "5px", color: "#ccc" }} />
        }
        placeholder="Search"
        className={styles.searchBar}
      />

      {/* Notification Icon */}
      <Badge count={2} style={{ marginRight: "20px" }}>
        <BellOutlined className={styles.notificationIcon} />
      </Badge>

      {/* User Avatar */}
      <div className={styles.userInfo}>
        <Avatar src="https://i.pravatar.cc/300" alt="Admin Avatar" />
        <div style={{ marginLeft: "10px" }}>
          <div className={styles.userName}>John Doe</div>
          <div className={styles.userRole}>Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
