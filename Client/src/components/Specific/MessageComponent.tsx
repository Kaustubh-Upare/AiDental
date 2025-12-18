import { Eye } from 'lucide-react';
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    content:string;
    setter:string;
}
const MessageComponent = ({content,setter}: Props) => {
  const isAI = setter === "ai";
  return (
     <motion.div className={`flex items-end ${setter==="ai"?"justify-start":"justify-end"} gap-2 p-2`
     }
     initial={{ opacity: 0, x: isAI ? 100 : -100, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1], // cubic-bezier for smooth motion
      }}
      layout={false} // Prevents layout animations for better performance
     >
      {/* Message Content Wrapper */}
        <div className="flex items-end max-w-[70%] gap-2 ">
          {
            setter=="ai" && 
            <motion.div className="w-11 h-12 rounded-2xl overflow-hidden bg-[#f9c39e] flex-shrink-0 border-2 border-white/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            >
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lili" 
                alt="Lili Wilson" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          }
          {/* The Chat Bubble */}
          <motion.div className={`${isAI?"border-1 bg-[#30333D]":"bg-[#6384ff]"} text-white px-3 py-2 rounded-2xl rounded-br-none`}
            initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.05, duration: 0.2 }}
          >
            
            {/* Message Text */}
            <p className="text-sm leading-tight">
              {content}
            </p>

            {/* Bottom Row: Time */}
            <div className="flex justify-end">
              <p className="font-medium text-xs text-[#dad9d9]">09:01</p>
            </div>

          </motion.div>
          { setter!=="ai"&&
            <motion.div className="w-11 h-12 rounded-2xl overflow-hidden bg-[#f9c39e] flex-shrink-0 border-2 border-white/5"
              initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            >
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lili" 
                alt="Lili Wilson" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          } 
        </div>

      {/* Right-Side Avatar */}
        
      </motion.div>
    
     
  )
}

export default MessageComponent