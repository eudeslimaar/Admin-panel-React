import React from 'react';
import './featured.scss';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//MUI icons
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">
          Total Revenue
        </h1>
        <MoreVertOutlinedIcon className='icon'/>
        
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={18} text={"18%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales make today</p>
        <div className="amount">$ 518</div>
        <div className="description">descp</div>
        <div className="summary">
          <div className="item">
              <div className="itemTitle">
                  Target
                </div>
              <KeyboardArrowDownIcon/>
              <div className="itemResult">
                <div className="resultAmount">
                    $12.4k
                </div>
              </div>
          </div>
          <div className="item">
              <div className="itemTitle">
                  Target
                </div>
              <KeyboardArrowDownIcon/>
              <div className="itemResult">
                <div className="resultAmount">
                    $12.4k
                </div>
              </div>
          </div>
          <div className="item">
              <div className="itemTitle">
                  Target
                </div>
              <KeyboardArrowDownIcon/>
              <div className="itemResult">
                <div className="resultAmount">
                    $12.4k
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Featured