import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddOutlined } from "@mui/icons-material";

function EmployeeFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="add-btn"
        style={{
          background: "#00aec7",
          color: "white",
          marginBottom: "20px",
          width: "200px",
        }}
        variant="contained"
        size="large"
        onClick={handleClickOpen}
      >
        <AddOutlined />
        ADD EMPLOYEE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new Employee</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { EmployeeFormDialog };
