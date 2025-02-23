import { useState, useEffect } from "react";
import axios from "axios";
const DogShow = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetch,setFetch] =useState(false);
  useEffect(() => {
    setLoading(true);

    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      console.log(res);
      setUrl(res.data.message)
      setLoading(false);
    });
  },[fetch]);
  return (
    <>
{loading?<p>Loading...</p>: <img src={url} alt='dog' style={{width: 200}} />}
<button onClick={()=>{setFetch(!fetch)}}>see next img</button>
    </>
  )
};
export default DogShow;
