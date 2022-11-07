import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { remove } from "../api/employeeClient";
import Employee from "../entities/Employee";

type Props = {
  id: number;
  name: string;
  setEmployees: (action: React.SetStateAction<Employee[]>) => void;
};

function DeleteEmployeeButton({ id, name, setEmployees }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleDeletion = (id: number) => {
    remove(id)
      .then(() => {
        setEmployees((current) =>
          current.filter((employee) => employee.id !== id)
        );
      })
      .finally(() => setOpen(false));
  };

  return (
    <>
      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={handleDialog}
      >
        <DeleteForeverOutlined />
      </Button>
      <Dialog open={open} onClose={handleDialog}>
        <DialogTitle>Delete {name} from registry?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action is irreversible. Are you sure you want to proceed with
            deletion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} autoFocus>
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleDeletion(id)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { DeleteEmployeeButton };
