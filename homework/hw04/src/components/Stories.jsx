import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {

    const [stories, setStories] = useState([]);
      
        async function getStories() {
                const data = await getDataFromServer(token, "/api/stories");
                // console.log(data);
                setStories(data);
            }
    
        useEffect(()=>{
            getStories()
        },[])
    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {stories.map((item)=>{
                return (<div className="flex flex-col" key={item.id}>
                    <img style= {{"width":"3vw", height:"3vw", borderRadius:"2.5vw"}}src={item.user.image_url}></img>
                    {item.user.username}
                </div>)
            })}
        </header>
    );
}
