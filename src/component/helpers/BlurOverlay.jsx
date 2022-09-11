import React from "react";

const BlurOverlay = (props) => {
  return (
    <div className="absolute w-full h-screen top-0 left-0 backdrop-filter backdrop-blur-[3px] ">
      {props.component}
    </div>
  );
};

export default BlurOverlay;
