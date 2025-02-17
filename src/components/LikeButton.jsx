import  { useState,useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [on,setOn] = useState(true);
  useEffect(()=>{
    document.title= `click ${like}`
  })
  return (<><button onClick={()=>{setLike(like+1)}}>{like} LIKE</button><button onClick={()=>setOn(!on)}>{on?'on':'off'}</button></>);
};
export default LikeButton;
