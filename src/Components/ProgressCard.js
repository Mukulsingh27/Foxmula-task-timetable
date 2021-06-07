import React from "react";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function ProgressCard() {
  return <div className='p-5 d-flex card-2'>
    <div className='circle-o'>
      <div className='inner-circle'>
        <p className='circle-p'>90%</p>
      </div>
    </div>
    <div className='circle-o'>
      <div className='inner-circle'>
        <p className='circle-p'>70%</p>
      </div>
    </div>
  <div className='rating'>
    <StarBorderOutlinedIcon />
    <StarBorderOutlinedIcon /> 
    <StarBorderOutlinedIcon />
    <StarBorderOutlinedIcon />
    <StarBorderOutlinedIcon />
    <p className="rating-p">Ratings</p>
  </div>
  </div>;
  
}

export default ProgressCard;
