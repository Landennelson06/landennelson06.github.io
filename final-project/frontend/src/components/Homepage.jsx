import React, { useState } from "react";
import EditModal from "./EditModal";
import TabsDefault from "./TabsDefault"
export default function Homepage({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  return (
    <>
    <TabsDefault setData={setData} setIsOpen={setIsOpen}></TabsDefault>
    <div className="fixed bottom-10 right-10 z-50">
      <button className="rounded-md bg-blue-400 text-white w-12 h-12 text-2xl" onClick={()=>{setData(null); setIsOpen(true)}}>+</button>  
    </div>
    <EditModal isOpen={isOpen} setIsOpen={setIsOpen} data={data}></EditModal>
</>
  );
}
