import { TypographyLarge } from "../Styled/Typography"

import {Input} from '@/components/ui/input'

import { PaginatedTable, SelectCompo } from "../Styled/Components"
import { Button } from "../ui/button"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import NewTaskDialog from "../Dialog/DocDialog/NewTaskDialog"

const Home = () => {
  const [openDialog,setOpenDialog]=useState<boolean>(false);
  return (
    <>
      <div className="flex items-center justify-between">
          {<TypographyLarge txt="Tasks" />}

          <Button size={"lg"} className="sm:mr-19" onClick={()=>setOpenDialog(true)}>
            <PlusIcon />
            New Task
          </Button>

          
      </div>
      <NewTaskDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <div className="grid w-full items-center gap-3 border-1 border-[#2e2d2d] p-3 pb-5 mt-4 rounded-md ">
        <label htmlFor="search">Search</label>
        <Input id="search" placeholder="Search" />
      </div>

      <div className="mt-3 flex gap-5">
        <SelectCompo placeholder="All Status"  selectLabelName="Status" selectValues={["Unresolved","Resolved","In Progress"]} />
        <SelectCompo placeholder="All Category"  selectLabelName="Category" selectValues={["New Patient Booking Attempt","Existing Patient Appointment","Patient Appointment Management"]} />
      </div>

      <PaginatedTable />
    </>
    
  )
}

export default Home