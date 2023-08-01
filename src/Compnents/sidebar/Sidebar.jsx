import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SystemUpdateOutlinedIcon from "@mui/icons-material/SystemUpdateOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const{dispatch}=useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration:'none'}}>
        <span className="logo">lamaadmin</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>
<Link to="/users" style={{textDecoration:'none'}}>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />

            <span>Users</span>
          </li>
</Link>
<Link to="/Products" style={{textDecoration:'none'}}>
          <li>
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </li>
</Link>

          <li>
            <BorderAllIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <ElectricRickshawIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <InsertChartIcon className="icon"/>
            <span>Stats</span>
          </li>

          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <LocalFireDepartmentOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SystemUpdateOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
      <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      
      </div>
    </div>
  );
};

export default Sidebar;
