import React from 'react'
import './widget.scss'

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// MUI icons
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


export const Widget = ({type}) => {
  let amount= 2105;
  let diff = 34;
  let data;

  switch(type){
    case "user":
      data = {
          title: "Users",
          isMoney: false,
          link: "See all users",
          icon: (<PersonIcon className="icon"/>)
      }
      break;
      case "order":
      data = {
          title: "Orders",
          isMoney: false,
          link: "View all orders",
          icon: (<ShoppingCartOutlinedIcon
              className="icon"/>)
      }
      break;
      case "earning":
      data = {
          title: "Earnings",
          isMoney: true,
          link: "View net earnings",
          icon: (<AccountBalanceWalletOutlinedIcon className="icon"/>)
      }
      break;
      case "balance":
      data = {
          title: "Balance",
          isMoney: true,
          link: "View all balance",
          icon: (<MonetizationOnOutlinedIcon className="icon"/>)
      }
      break;
      default:
      break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon/>{diff}%</div>
          {data.icon}
      </div>
     
    </div>
  )
}
export default Widget