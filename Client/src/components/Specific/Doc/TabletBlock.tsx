import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Trash2Icon } from 'lucide-react';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';

// type TabletBlockProps = {
//     index:number;
//     onRemove:()=>void;
// }

type Tablet={
  tabletName:string;
  times:{
    morning: { before: string; after: string; days: number | null };
    afternoon: { before: string; after: string; days: number | null };
    night: { before: string; after: string; days: number | null };
  };
};

type FormValues={
  tablets:Tablet[];
};

const emptyTablet=():Tablet=>({
  tabletName: "",
  times: {
    morning: { before: "", after: "", days: null },
    afternoon: { before: "", after: "", days: null },
    night: { before: "", after: "", days: null },
  },
})


const TabletBlock = () => {
  const form=useForm<FormValues>({
    defaultValues:{tablets:[emptyTablet()]},
    mode:"onSubmit",
  })
  const {fields,append,remove}=useFieldArray({
    control:form.control,
    name:"tablets",
  });
  
  const onSubmit=async(values:FormValues)=>{
    console.log("on Submit")
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {
            fields.map((f,index)=>(
              <div className='border-1 p-2 rounded-lg mb-2'>
                <div className='flex justify-between mb-2'>
                  <Button size={"icon-sm"} variant={"outline"} >
                    {index+1}
                  </Button>
                  <Button variant={"outline"}  size={"icon-sm"} onClick={()=>remove(index)} disabled={fields.length===1}>
                    <Trash2Icon color='red'/>
                  </Button>
                </div>
                <FormField 
                  control={form.control}
                  name={`tablets.${index}.tabletName`}
                  render={({field})=>(
                      <FormItem className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <FormLabel className="sm:w-40">Tablet Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter the Tablet" />
                          </FormControl>
                      </FormItem>
                  )}
                />

                  {/* <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 col-span-2 justify-center mb-2">
                    <label htmlFor="tab1" className="text-sm sm:w-25 text-center font-bold">Tablet Name</label>
                    <Input placeholder="Enter the Tablet" className="text-xs h-7 w-3xl"/>
                </div> */}

                <div className='grid grid-cols-4 w-full gap-x-8 gap-y-2 '>
                  <div />
                  <div className='text-shadow-md font-semibold text-neutral-100 text-center '>
                    Before Snack
                  </div>
                  <div className="text-shadow-md  font-semibold text-neutral-100 text-center">
                    After Snack
                  </div>
                  <div className="text-shadow-md font-semibold text-neutral-100 text-center">
                    Dosage Days
                  </div>

                  {/* Morning row */}
                  <div className="text-base text-neutral-100 font-semibold text-center">Morning</div>
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.morning.before`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />

                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.morning.after`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.morning.days`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type="number" value={field.value??""} 
                          onChange={(e)=>field.onChange(e.target.value===""?null:Number(e.target.value))} 
                          placeholder='Days'
                          />
                          
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  {/* Afternoon */}
                  <div className="text-base text-neutral-100 font-semibold text-center">AfterNoon</div>
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.afternoon.before`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />

                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.afternoon.after`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.afternoon.days`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type="number" value={field.value??""} 
                          onChange={(e)=>field.onChange(e.target.value===""?null:Number(e.target.value))} 
                          placeholder='Days'
                          />
                          
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  
                  {/* night */}
                  <div className="text-base text-neutral-100 font-semibold text-center">Night</div>
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.night.before`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />

                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.night.after`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type='time' {...field} />
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  
                  <FormField
                    control={form.control}
                    name={`tablets.${index}.times.night.days`}
                    render={({field})=>(
                      <FormItem>
                        <FormControl>
                          <Input type="number" value={field.value??""} 
                          onChange={(e)=>field.onChange(e.target.value===""?null:Number(e.target.value))} 
                          placeholder='Days'
                          />
                          
                        </FormControl>
                      </FormItem>
                    )} 
                  />
                  {/* <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time'/>
                  <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time' />
                  <div className='flex justify-center'>
                  <Input className="h-9 w-16" placeholder='Days' type='number' />
                  </div> */}

                  {/* Afternoon row */}
                {/* <div className="text-base text-neutral-100 font-semibold text-center">Afternoon</div>
                  <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time'/>
                  <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time' />
                  <div className='flex justify-center'>
                  <Input className="h-9 w-16" placeholder='Days' type='number' />
                  </div> */}

                {/* <div className="text-base text-neutral-100 font-semibold text-center">Night</div>
                <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time'/>
                  <Input className="h-9 max-w-xs" placeholder='Enter Time' type='time' />
                  <div className='flex justify-center'>
                  <Input className="h-9 w-16" placeholder='Days' type='number' />
                  </div> */}


                </div>
              </div>
            ))
          }
            <div className='flex justify-end'>
              <Button type="button" variant={'outline'} className="w-xs " onClick={() => append(emptyTablet())}>
              Load More
            </Button>
            </div>

            <div className='flex justify-end'>
              <Button type="submit"  className="w-xs">
              Submit
            </Button>
            </div>
        </form>
    </Form>

   
  )
}

export default TabletBlock