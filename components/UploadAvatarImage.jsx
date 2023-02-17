import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";

const DynamicAvatarEdit = dynamic(() => import("react-avatar-edit"), {
  ssr: false,
});

export default function UploadAvaterImage({
  setClose,
  open,
  onCrop,
  onClose,
  imageSubmit,
}) {
  return (
    <Dialog onClose={() => setClose()} open={open}>
      <DialogTitle>Upload Image</DialogTitle>
      <DialogContent className="m-4">
        <DynamicAvatarEdit
          width={500}
          height={300}
          src={null}
          onCrop={(view) => onCrop(view)}
          onClose={() => onClose()}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => imageSubmit()}>save</Button>
      </DialogActions>
    </Dialog>
  );
}
