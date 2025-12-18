import MessageComponent from '@/components/Specific/MessageComponent'
import React from 'react'

type Props = {}

const dataT=[
  {id:1,content:"Something somewhat somewhere",setter:"ai"},
  {id:1,content:"Something somewhat somewhere",setter:"user"},
  { id: 3, content: "Hey, did you get a chance to review the draft I sent?", setter: "user" },
  { id: 4, content: "Yes, I looked it over and left a few comments for you.", setter: "ai" },
  { id: 5, content: "Some sections might need clarification, especially the introduction.", setter: "ai" },
  { id: 6, content: "Got it, I’ll rewrite the intro and send an update.", setter: "user" },
  { id: 7, content: "Make sure the tone stays consistent with the rest of the document.", setter: "ai" },
  { id: 8, content: "Do you think we should add an example in the second section?", setter: "user" },
  { id: 9, content: "An example would definitely help improve readability.", setter: "ai" },
  { id: 10, content: "Okay, I’ll include a short use-case scenario there.", setter: "user" },
  { id: 11, content: "That sounds good. Keep it concise though.", setter: "ai" },
  { id: 12, content: "I’ve pushed the latest changes to the shared folder.", setter: "user" },
  { id: 13, content: "I see them now. The flow is much better than before.", setter: "ai" },
  { id: 14, content: "Is there anything else you’d like me to adjust?", setter: "user" },
  { id: 15, content: "Maybe tweak the conclusion so it feels more actionable.", setter: "ai" },
  { id: 16, content: "Alright, I’ll add a clear next-steps section.", setter: "user" },
  { id: 17, content: "Perfect. That should help guide the reader.", setter: "ai" },
  { id: 18, content: "I’ll make that change and notify you once it’s done.", setter: "user" },
  { id: 19, content: "Thanks. Take your time, no rush on my end.", setter: "ai" },
  { id: 20, content: "Quick question: should we keep the current title?", setter: "user" },
  { id: 21, content: "The title works, but a more specific one could be stronger.", setter: "ai" },
  { id: 22, content: "I’ll brainstorm a few alternatives and send them over.", setter: "user" },
  { id: 23, content: "Sounds good. We can pick the best option together.", setter: "ai" },
  { id: 24, content: "I’ve added three new title options to the document.", setter: "user" },
  { id: 25, content: "Nice, I like the second one the most.", setter: "ai" },
  { id: 26, content: "Great, I’ll update the title and finalize the draft.", setter: "user" },
  { id: 27, content: "Once that’s done, we should be ready to share it.", setter: "ai" },
  { id: 28, content: "Alright, final version is now uploaded.", setter: "user" },
  { id: 29, content: "Reviewed it again—everything looks solid now.", setter: "ai" },
  { id: 30, content: "Awesome, thanks for the help!", setter: "user" }
]

const UserChatDetail = (props: Props) => {



  return (
    /* 1. Add h-full to fill the parent container */
    <div className='grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-2 h-full'>
        
        {/* 2. Chat Area: Needs flex-col and overflow-hidden to allow message scrolling */}
        <div className=' flex flex-col min-h-0'>
            <div className="border-1 border-[#575757] bg-[#171717] p-1.5 w-full rounded-md text-sm">
              Chat Header
            </div>
            <div className="flex-1 flex-col overflow-y-auto p-4">
               {/* Messages go here */}
               <p>Chat messages...</p>
               {
                dataT.map((v,idx)=>(
                  <div key={idx} className={`${v.setter==='ai'?"justify-self-start":"justify-self-end"}`}>
                    <MessageComponent content={v.content} setter={v.setter} />
                  </div>
                ))
               }
            </div>
            <div className="p-2 border-t">Input Area</div>
        </div>

        {/* 3. Info Sidebar: Use hidden md:flex to show only on desktop */}
        <div className='border-1 border-red-800 hidden md:flex flex-col min-h-0'>
            <div className="p-4">
                <h3 className="font-bold">User Details</h3>
                <p className="text-sm text-gray-400">Shared Files, Media, etc.</p>
            </div>
        </div>
    </div>
  )
}

export default UserChatDetail