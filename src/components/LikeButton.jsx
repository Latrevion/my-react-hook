import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [on,setOn] = useState(true);
  return (<><button onClick={()=>{setLike(like+1)}}>{like} LIKE</button><button onClick={()=>setOn(!on)}>{on?'on':'off'}</button></>);
};
export default LikeButton;
