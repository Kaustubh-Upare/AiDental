import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon, MessagesSquareIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type selectProps={
 placeholder:string,
 selectLabelName:string,
 selectValues:string[]
}

export const SelectCompo=({placeholder,selectLabelName,selectValues}:selectProps)=>{
    return(
      <Select>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>  
          <SelectContent>
              <SelectGroup>
                  <SelectLabel>{selectLabelName}</SelectLabel>
                  {
                    selectValues.map((val)=>(
                        <SelectItem key={val} value={val}>
                            {val}
                        </SelectItem>
                    ))
                  }
              </SelectGroup>
          </SelectContent>
        </Select>
    )
}

export const PaginatedTable=()=>{


  const data=[
    {id:1,PatientName:"Kastya",Category:"New Patient Booking",Status:"Unresolved",Actions:"View Conversation",Summary:"sadn sjd as dsdjas dasd sad lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure rerum. Esse nihil magni maiores aperiam. Laudantium voluptatibus tempore pariatur quia, qui dicta repudiandae corporis iusto, ex illum a omnis!"},
    {id:1,PatientName:"Kastya",Category:"New Patient Booking",Status:"Unresolved",Actions:"View Conversation",Summary:"sadn sjd as dsdjas dasd sad lorem "},
    {id:1,PatientName:"Kastya",Category:"New Patient Booking",Status:"Unresolved",Actions:"View Conversation",Summary:"sadn sjd as dsdjas dasd sad lorem "},
    {id:1,PatientName:"Kastya",Category:"New Patient Booking",Status:"Unresolved",Actions:"View Conversation",Summary:"sadn sjd as dsdjas dasd sad lorem "},
    {id:1,PatientName:"Kastya",Category:"New Patient Booking",Status:"Unresolved",Actions:"View Conversation",Summary:"sadn sjd as dsdjas dasd sad lorem "}
  
  
  ]

  return(
    <div className="w-full mt-3 border-1 border-zinc-900 rounded-xl p-2  ">
      <div className="rounded-xl border border-zinc-800 overflow-hidden">
          <table className="w-full">
          <thead className="bg-[#262626] ">
            <tr className="text-[7px] sm:text-sm ">
              <th>Id</th>
              <th>Patient Name</th>
              <th>Category</th>
              <th>Status</th>
              
              <th>Actions</th>
              <th>Summary</th>
            </tr>
          </thead>

          <tbody>
            {data.map((v)=>(
              <tr key={v.id} className="border-1 border-zinc-900 text-center [&>td]:px-4 [&>td]:py-2 text-[8px] sm:text-[10px] md:text-[12px]">
                  <td>{v.id}</td>
                  <td>{v.PatientName}</td>
                  
                  <td>{v.Category}</td>
                  
                  <td>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="border p-2 rounded-full flex items-center gap-1 hover:cursor-pointer hover:bg-zinc-900">
                          {v.Status}
                          <ChevronDownIcon className="w-4 h-4" />
                        </div>
                      </PopoverTrigger>

                      <PopoverContent className="w-25 p-0">
                        {/* put whatever you want in the popover */}
                        <div className="flex-col text-xs text-center gap-1 rounded-xl bg-[#161616]">
                            {
                              ["Unresolved","Resolved","In Pending"].map((v)=>(
                                <div className="border-1 py-2 cursor-pointer hover:bg-gray-700" >{v}</div>
                              ))
                            }
                          
                        </div>
                        {/* <p className="text-xs text-muted-foreground">Change status:</p>
                        
                        <p className="text-xs text-muted-foreground">Change status:</p> */}
                      </PopoverContent>
                    </Popover>
                  </td>
                  <td>
                    <div className="flex justify-center items-center border-1 p-1 rounded-xl hover:cursor-pointer hover:bg-zinc-900" >
                      <MessagesSquareIcon className="w-6 h-4" />
                      {v.Actions}
                    </div>
                    </td>
                  <td className="px-4 py-2 align-top">
                    <div className="max-h-20 overflow-y-auto">
                      {v.Summary}
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Paginated Option */}
      
      <div className="flex mt-2 p-2 justify-between">
          <div>
            <p className="text-[#dadada] text-sm">0 of 68 row(s) selected.</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <p className="text-[#ffffff] text-sm">Rows Per Page</p>
           <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Rows" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rows</SelectLabel>
                {[10, 20, 30, 40].map((val) => (
                  <SelectItem key={val} value={String(val)}>
                    {val}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
      </div>
    </div>
  )
}

export function AvatarCompo(fallbackImage:string,imageUrl:string) {
  return (
      <Avatar>
        <AvatarImage src={imageUrl} alt="@shadcn" />
        <AvatarFallback>{fallbackImage}</AvatarFallback>
      </Avatar>
  )
}