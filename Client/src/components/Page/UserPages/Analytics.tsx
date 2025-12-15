import { TypographyLarge } from "@/components/Styled/Typography"
import { useRef } from "react";
import AnalyticsChart from '../../Charts/User/AnalyticsChart'

type Props = {}

const Analyticsu = (props: Props) => {

  const dashboardCard=[
    {heading:"Total Appointment",data:2,para:"Total Appointment"},
    // {heading:"Queued Person",data:20,para:"sa jasd ja sdhas "},
    // {heading:"something ",data:2,para:"sa jasd ja sdhas "},
    {heading:"something ",data:2,para:"sa jasd ja sdhas "},
    
  ]
  const chartDivRef = useRef<HTMLDivElement>(null);
    return (
    <>
      <div className="flex items-center mb-4">
                {<TypographyLarge txt="Analytics" />}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          {
            dashboardCard.map((x,ind)=>(
              <div key={ind} className="flex flex-col border-1 border-[#2e2d2d] p-4 bg-[#171717] rounded-md hover:border-[#828181] hover:shadow-[0_0_15px_#828181] transition-all duration-350" >
                  <div className='text-gray-300 text-sm '>{x.heading}</div>
                  <div className='font-bold text-2xl sm:text-3xl mb-3'>{x.data}</div>
                  <div className='text-xs mt-2 text-[#b1b1b1]'>{x.para}</div>
              </div>
            ))
          }
      </div>

       <div className="w-full mt-2">
        <div className="border-1 p-3 border-[#2e2d2d]  bg-[#0D0D0D] rounded-md  " >
            <AnalyticsChart ref={chartDivRef} className="h-[320px] w-full" />
        </div>
        
      </div>
    </>
    )
}

export default Analyticsu