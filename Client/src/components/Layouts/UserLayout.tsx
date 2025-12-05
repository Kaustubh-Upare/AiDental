import{ useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ActivityIcon, BotIcon, BotMessageSquareIcon, ChevronDownIcon, HouseIcon, ListTodoIcon, MessageSquareIcon, PanelLeftIcon, StarHalfIcon, VideoIcon } from 'lucide-react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { TypographyH1, TypographyLarge } from '../Styled/Typography'
import { Outlet } from 'react-router-dom'
type Props = {}

const UserLayout = (props: Props) => {
  const [SidebarOpen,setSidebarOpen]=useState<boolean>(true)
  const handleSidebar=()=>{
        console.log('clicked')
        setSidebarOpen(p=>!p)
    }
  const sidebarLinks=[
        {name:"Home",Icon:<HouseIcon size={19}/>},
        {name:"Tasks",Icon:<ListTodoIcon size={19} />},
        {name:"Ask Ai",Icon:<BotIcon size={19} />},
        {name:"Analytics",Icon:<ActivityIcon size={19} />},
        {name:"Conveersations",Icon:<MessageSquareIcon size={19} />},
    ]
  return (
    <div className="h-screen w-screen flex">
        
      {/* Sidebar */}
      {
        SidebarOpen?
          <div className="w-33 h-full sm:w-55 md:w-66 lg:w-70 bg-black border-solid border-2 border-solid px-3 flex flex-col pb-2">
            
            {/* Heading */}
            <div className='flex gap-4 my-4 sm:my-7 justify-center'>
                <h1 className='text-md sm:text-2xl md:text-3xl text-shadow-2xs text-glow font-display text-[#00D8FF] '>Ai Cliniq</h1>
            </div>
            {/* <Separator className="my-4"/> */}

            {/* Links Content */}
            <div className='flex flex-col gap-2 text-sm sm:ml-4 md:ml-8'>
              {sidebarLinks.map((x,ind)=>
                <div key={ind} className='flex gap-3 text-serif text-[11px] sm:text-sm hover:border-l-4 hover:border-l-purple-950 p-2 hover:bg-stone-800 hover:rounded-r-sx hover:cursor-pointer '> 
                    <div>{x.Icon}</div>
                    <div>{x.name}</div>
                         
                </div>
              )}
              {/* <Separator className="mt-2  bg-stone-600"/>
              <div className='flex gap-2 p-2 hover:border-l-3 hover:border-l-white hover:rounded-l-sm'>
                            <div><StarHalfIcon size={22}  /></div>
                            {<TypographyLarge txt="Upgrade" />}
              </div> */}
            </div>
            <div className='mt-auto'>
                    <Item variant="outline" className="p-2 hover:border-[#bab3b3]">
                        <Avatar>
                            <AvatarImage src="https://github.com/johndoe.png" alt="John Doe" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <ItemContent>
                            <ItemTitle>John Doe</ItemTitle>
                            <ItemDescription>John@gmail.com</ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <button className="hover:bg-[#292828] p-1 rounded-md" onClick={()=>console.log("s")}><ChevronDownIcon size={20} /></button>
                            
                        </ItemActions>    
                    </Item>
            </div>


          </div>
        :<></>
      }
      
      {/* Right Side of SideBar */}
      <div className="flex flex-1 flex-col">
          {/* Header */}
          <div className='h-10  border-b-1 border-[#292828] flex items-center px-2'>
              <div onClick={handleSidebar}>
                    <PanelLeftIcon  size={25} color='#c7c3c3ff' className='hover:bg-[#292828] hover:shadow-[0_0_15px_rgba(199,195,195,0.8)] transition-all duration-300 rounded p-1 cursor-pointer'/>
              </div>
              <Separator orientation='vertical' className="ml-2"/>
              <div className='ml-2'>
                {<TypographyLarge txt="Lets See" />}
              </div>
                   
          </div>

          {/* Main Content */}
          <div className='flex-1 p-3 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-dark bg-[#0d0d0d]'>
              <Outlet />
          </div>
      </div>
    </div>
  )
}

export default UserLayout