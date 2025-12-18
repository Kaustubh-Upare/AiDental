import React from 'react'
import {Input} from '@/components/ui/input'
// import { AvatarCompo } from '../Styled/Components' // Assuming this is functional
import { Search } from 'lucide-react' // Using lucide-react for the search icon
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

type Props = {}

const Conversations = (props: Props) => {
    const tempPeopleList=[
        {name:"Alice Johnson", time:"1h", lastMessage: "Hey, are you free for the meeting?"},
        {name:"Bob Smith", time:"15h", lastMessage: "Okay, I'll review the draft."},
        {name:"Charlie Brown", time:"16min", lastMessage: "Did you check the email I sent?"},
        {name:"David Lee", time:"1h", lastMessage: "See you tomorrow."},
        {name:"Emily White", time:"30min", lastMessage: "Thanks for the heads up!"},
        {name:"Frank Green", time:"2d", lastMessage: "Product roadmap finalized."},
        {name:"Grace Hall", time:"1h", lastMessage: "Sending the files now."},
        {name:"Henry Clark", time:"2h", lastMessage: "I've started on the new feature."},
        {name:"Ivy King", time:"1h", lastMessage: "Let's connect later."},
        {name:"Jack Miller", time:"4h", lastMessage: "Acknowledged."},
        {name:"Kelly Adams", time:"1h", lastMessage: "What's the status?"},
        {name:"Liam Scott", time:"5d", lastMessage: "Got it, thanks!"},
        // Add more items to ensure scrolling is necessary
        {name:"Mia Taylor", time:"1h", lastMessage: "Sure thing."},
        {name:"Noah Wilson", time:"10min", lastMessage: "Almost done."},
        {name:"Olivia Baker", time:"1h", lastMessage: "Need help?"},
        {name:"Peter Harris", time:"2h", lastMessage: "Running late."},
    ]
    const navigate=useNavigate();
    const location=useLocation();
    const {uconId}=useParams();

    const isChatSelected=!!uconId

    return (
        <div className='flex flex-col sm:flex-row flex-1 h-full'>
            
            {/* 2. Conversation List (Master View) */}
            <div className={`w-full sm:w-1/5  p-1 flex flex-col ${isChatSelected?'hidden sm:flex':'flex'}`}>
                
                {/* Search Bar with Icon (Fixed Height) */}
                <div className="relative mb-3">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="search" placeholder="Search" className="pl-10" /> 
                </div>

                <div className='flex-1 overflow-y-auto'>
                    {
                        tempPeopleList.map((val, ind) => (
                            <div 
                                key={ind} 
                                className='flex items-center gap-3 p-3 text-white hover:bg-gray-800 transition-colors duration-150 cursor-pointer rounded-lg'
                                onClick={()=>navigate(`user1`)}
                            >
                                {/* Avatar */}
                                <div className='flex-shrink-0'>
                                    {/* Using a better placeholder for the image sizing */}
                                    <img src="https://github.com/evilrabbit.png" alt="" className='w-10 h-10 rounded-full object-cover' />
                                </div>
                                
                                {/* Name and Last Message (Uses flex-1 to push time to the right) */}
                                <div className='flex-1 min-w-0'> 
                                    <p className='text-sm font-semibold truncate'>{val.name}</p>
                                    <p className='text-gray-400 text-xs truncate'>Click to view</p>
                                </div>
                                
                                {/* Time Stamp */}
                                <div className='ml-auto text-xs flex-shrink-0 text-[#a3a3a3]'>{val.time}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            {/* 4. Conversation View (Detail View) */}
            <div className="flex-1 p-1 border-gray-700">
                {
                  !isChatSelected && (
                    <div className="border-1 border-[#575757] bg-[#171717] p-1.5 w-full rounded-md">
                      <h2 className="text-gray-200 text-sm pl-2">Select a Conversation To View The Messages</h2>
                    </div>
                  )
                }

                 {
                  isChatSelected && (
                    <>
                    {/* <div className="border-1 border-[#575757] bg-[#171717] p-1.5 w-full rounded-md">
                      <h2 className="text-gray-200 text-sm pl-2">User123</h2>
                    </div> */}
                    <div className='flex flex-col flex-1 h-full'>
                        <Outlet></Outlet>
                    </div>   
                    
                    </>
                  )
                }
                
            </div>
        </div>
    )
}

export default Conversations;