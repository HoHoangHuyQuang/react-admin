import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React from "react";
import { Link } from "react-router-dom";

export default function AppSide() {
  // const context = React.useContext();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "400px" }}>
      <Sidebar collapsed={isCollapsed}>
        <Menu
          renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              return {
                color: disabled ? "#9e9e9e" : "#233ad1",
                backgroundColor: active ? "#eecef9" : undefined,
              };
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : <CloseOutlinedIcon/>}
            style={{
              margin: "10px 0 20px 0",
            }}
          ></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem
            icon={<ContactsOutlinedIcon />}
            component={<Link to="/contacts" />}
          >
            Contacts
          </MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <SubMenu icon={<SignalCellularAltOutlinedIcon />} label="Charts">
            <MenuItem disabled> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
