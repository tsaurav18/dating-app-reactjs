import React from "react";


import  IconButton  from '@material-ui/core/IconButton';

function SwipeButtons({buttonPressed, icon, classname}) {

    const handlePressed=()=>{
        buttonPressed()
    }
  return <div >
      <IconButton className={classname} onClick={()=>handlePressed()} >
  {icon}
      </IconButton>
  </div>;
}

export default SwipeButtons;
