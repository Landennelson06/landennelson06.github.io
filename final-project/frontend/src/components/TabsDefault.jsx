import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
import Drafts from "./Drafts";
import Completed from "./Completed";
import Example from "./BarChart";

function List(setData, setIsOpen){
  return (<>
    <div className="mx-16 my-8 gap-8 flex flex-row justify-start align-middle">
      <Drafts setData={setData} setOpen={setIsOpen}></Drafts>
      <Completed setData={setData} setOpen={setIsOpen}></Completed>
    </div>
    </>)
}
export default function TabsDefault({setData, setIsOpen}) {
  const data = [
    {
      label: "List View",
      value: "list",
    },
    {
      label: "Graph View",
      value: "graph",
    },
  ];
 
  return (
    <Tabs value="list">
      <TabsHeader className="my-2">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value}) => (
          <TabPanel key={value} value={value}>
            {value == "list" ? List(setData,setIsOpen) : <Example></Example>}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}