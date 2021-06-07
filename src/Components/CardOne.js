import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Activity from "./Activity";
import Avatar from "./Avatar";

function CardOne() {
  return (
    <div className='card-1 p-3'>
      <h4>Batch Name | PHY_B1</h4>
      <div className='icon-top-right d-flex flex-col'>
        <EditIcon />
        <PersonAddIcon />
      </div>
      <div className='inner-card-1'>
        <Avatar
          imgUrl={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          name={"Marvin McKinney"}
        />
        <Avatar
          imgUrl={
            "https://th.bing.com/th/id/Rfd5a137d4cc43657449836c511c422e1?rik=xs4NJnZD7SrL9w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_24787.png&ehk=XT7ycIEO1QBstZHkYYA%2fmHm7bSjaBM1nSo61Bl%2bnJSs%3d&risl=&pid=ImgRaw"
          }
          name={"125 Students"}
        />
        <Activity />
      </div>
    </div>
  );
}

export default CardOne;
