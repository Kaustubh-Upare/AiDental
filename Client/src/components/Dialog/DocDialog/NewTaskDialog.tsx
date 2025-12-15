import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  openDialog:boolean;
  setOpenDialog:(open:boolean)=>void;
}

const NewTaskDialog = ({ openDialog, setOpenDialog }:Props) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
        </DialogHeader>
        <p>sads</p>
      </DialogContent>
    </Dialog>
  );
};


export default NewTaskDialog