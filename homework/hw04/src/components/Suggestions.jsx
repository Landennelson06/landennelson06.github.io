import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Suggestions({ token }) {
     const [sugg, setSugg] = useState([]);
          
        async function getSugg() {
                const data = await getDataFromServer(token, "/api/suggestions");
                console.log(data);
                setSugg(data);
            }
        
    useEffect(()=>{
        getSugg()
    },[])
    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            <section className="flex justify-between items-center mb-4 gap-2 flex flex-col">
                {sugg.map((item)=>(<div className="w-80 flex flex-row justify-between items-center"><img style= {{"width":"3vw", height:"3vw", borderRadius:"2.5vw"}} src={item.image_url}></img> {item.username}  <a href="#" className="text-blue-500">Follow</a></div>))}
            </section>
        </div>
    );
}
