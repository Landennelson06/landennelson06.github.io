import {React, useState, useEffect} from "react";
import { getDraft } from "../api";
import CarRow from "./CarRow";
export default function Drafts({setOpen, setData}){
    const [draft, setDraft] = useState([]);
    useEffect(()=>{
        getDraft()
            .then((data)=>{
                setDraft(data)
                console.log(data)
            });
        
    },[])

    return(
        <div>
            <h2 className="text-lg"> Drafts:</h2>
            <div className="flex flex-col">
                {draft.map((data)=><CarRow data={data} setModalData={setData} setOpen={setOpen}/>)}
            </div>
        </div>
    )
}