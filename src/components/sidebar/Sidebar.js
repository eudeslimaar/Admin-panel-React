import React from 'react'
import './sidebar.scss'
//Mui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/">
            <span className="logo">Logo</span>
        </Link>
            </div>
        
        <div className="center">
            <p className="title">Main</p>
            <ul>
                <Link to='home'>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
            </ul>
            <p className="title">Lists</p>
            <ul>
                <Link to='users'>
                <li>
                <AccountCircleIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
            </ul>
            <ul>
                <li>
                <CategoryIcon className='icon'/>
                    <span>Products</span>
                </li>
            </ul>
            <ul>
                <li>
                    <BorderAllIcon className='icon'/>
                    <span>Orders</span>
                </li>
            </ul>
            <ul>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
            </ul>
            <p className="title">Useful</p>
            <ul>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
            </ul>
            <ul>
                <li>
                    <NotificationsIcon className='icon'/>
                    <span>Notifications</span>
                </li>
            </ul>
            <p className="title">Service</p>
            <ul>
                <li>
                    <SystemUpdateAltOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
            </ul>
            <ul>
                <li>
                    <LockOpenIcon className='icon'/>
                    <span>Logs</span>
                </li>
            </ul>
            <ul>
                <li>
                    <DisplaySettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
            </ul>
            <p className="title">User</p>
            <ul>
                <li>
                    <GroupOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
            </ul>
            <ul>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
export default Sidebar;