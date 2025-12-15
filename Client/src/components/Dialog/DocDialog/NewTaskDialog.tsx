import { TypographyLarge, TypographyLargeSm } from "@/components/Styled/Typography";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = {
  openDialog:boolean;
  setOpenDialog:(open:boolean)=>void;
}

const NewTaskDialog = ({ openDialog, setOpenDialog }:Props) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Patient Info</DialogTitle>
            <DialogDescription>
              We can Add The details of The Patient.
            </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 ">
            <label htmlFor="mobileID" className="text-xs sm:w-25 text-center">Mobile No.</label>
            <Input id="mobileID" className="text-xs h-7" type="number" placeholder="Enter Number"/>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5">
            <label htmlFor="nameP" className="text-xs sm:w-25 text-center">Name (Optional)</label>
            <Input id="nameP" className="text-xs h-7" placeholder="Enter Name"/>
          </div>
        </div>
        
        <div>
          {TypographyLargeSm("Morning")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 col-span-2">
            <label htmlFor="tab1" className="text-xs sm:w-25 text-center">Tablet Name</label>
            <Input placeholder="Enter the Tablet" className="text-xs h-7"/>
          </div>
          <div className="border-2 col-span-2 p-2 flex flex-col gap-2">
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">Before Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">After Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
          </div>
        </div>
      {/* *************************************************** */}
        {/* Afternoon */}
        <div>
          {TypographyLargeSm("AfterNoon")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 col-span-2">
            <label htmlFor="tab1" className="text-xs sm:w-25 text-center">Tablet Name</label>
            <Input placeholder="Enter the Tablet" className="text-xs h-7"/>
          </div>
          <div className="border-2 col-span-2 p-2 flex flex-col gap-2">
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">Before Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">After Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
          </div>
        </div>
      {/* ******************************************* */}
      {/* Night */}
        <div>
          {TypographyLargeSm("Night")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 col-span-2">
            <label htmlFor="tab1" className="text-xs sm:w-25 text-center">Tablet Name</label>
            <Input placeholder="Enter the Tablet" className="text-xs h-7"/>
          </div>
          <div className="border-2 col-span-2 p-2 flex flex-col gap-2">
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">Before Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <label className="text-xs sm:w-25 text-center">After Snacks</label>
                <div className="flex">
                  <label className="text-xs sm:w-25 text-center">Time</label>
                  <Input type="time" placeholder="Time" className="text-xs h-7"/>
                  
                  <label className="text-xs sm:w-25 text-center">Days</label>
                  <Input type="number" placeholder="Days" className="text-xs h-7"/>
                </div>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};


export default NewTaskDialog