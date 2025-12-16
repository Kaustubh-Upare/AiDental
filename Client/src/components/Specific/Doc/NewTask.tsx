import { TypographyLarge, TypographyMuted } from '@/components/Styled/Typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DeleteIcon, Trash2Icon, TrashIcon } from 'lucide-react'
import React, { useState } from 'react'
import TabletBlock from './TabletBlock'

type Props = {}
type Block={
  id:string;
}


const NewTask = (props: Props) => {
  const [blocks,setBlocks]=useState<Block[]>([{id:crypto.randomUUID()}]);
  
  const handleMore=()=>{
    setBlocks((p)=>[...p,{id:crypto.randomUUID()}])
  }
  const removeBlock=(id:string)=>{
    setBlocks((prev)=>prev.filter((b)=>b.id!=id));
  }
  return (
  <>
    <div className='flex flex-col'>
      {<TypographyLarge txt="Patient Info" />}  
      {TypographyMuted("We can Add The details of The Patient.")}
    </div>
    
    <div className='grid grid-cols-2 gap-1 my-2'>
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 ">
            <label htmlFor="mobileID" className="text-sm text-center">Mobile No.</label>
            <Input id="mobileID" className="text-xs h-7" type="number" placeholder="Enter Number"/>
        </div>
          
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5">
            <label htmlFor="nameP" className="text-sm text-center">Name (Optional)</label>
            <Input id="nameP" className="text-xs h-7" placeholder="Enter Name"/>
        </div>
        
    </div>
    
    {/* Tablet */}
    <TabletBlock />
    {/* {
      blocks.map((b,idx)=>(
        <TabletBlock index={idx} key={b.id} onRemove={()=>removeBlock(b.id)}  />
      ))
    } */}
    {/* <Button className='w-full' onClick={handleMore}>Load More</Button> */}
    {/* <div className='flex justify-end'>
      <Button className="mt-4 flex" variant={'destructive'}  >
        Submit
      </Button>
    </div> */}
  </>
  )
}

export default NewTask