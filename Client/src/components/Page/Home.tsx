import { TypographyLarge } from "../Styled/Typography"

import {Input} from '@/components/ui/input'

import { PaginatedTable, SelectCompo } from "../Styled/Components"

const Home = () => {
  return (
    <>
      <div className="flex items-center">
          {<TypographyLarge txt="Tasks" />}
      </div>
      
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