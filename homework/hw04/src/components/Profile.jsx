import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default  function Profile({ token }) {
    const [prof, setProf] = useState([]);
  
    async function getProf() {
            const data = await getDataFromServer(token, "/api/profile");
            // console.log(data);
            setProf(data);
        }

    useEffect(()=>{
        getProf()
    },[])
    return (
        <header className="flex gap-4 items-center">
            <img style= {{"width":"3vw", height:"3vw", borderRadius:"2.5vw"}}src={prof.image_url}></img>
            <p>{prof.username}</p>
        </header>
    );
}
