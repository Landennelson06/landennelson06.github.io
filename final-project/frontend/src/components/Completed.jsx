import {React, useState, useEffect} from "react";
import { getCompleted, getDraft } from "../api";
import CarRow from "./CarRow";
export default function Completed({setOpen, setData}){
    const [draft, setDraft] = useState([]);
    useEffect(()=>{
        getCompleted()
            .then((data)=>{
                setDraft(data)
            });
        
    },[])

    return(
        <div>
            <h2 className="text-lg"> Completed:</h2>
            <div className="flex flex-col">
                {draft.map((data)=><CarRow data={data} setModalData={setData} setOpen={setOpen}/>)}
            </div>
        </div>
    )
}