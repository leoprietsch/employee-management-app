import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Employee from "../entities/Employee";
import { Team } from "../entities/Enums/Team";
import { getAll, remove } from "../api/employeeClient";
import moment from "moment";
import {
  AddOutlined,
  DeleteForeverOutlined,
  EditOutlined,
} from "@mui/icons-material";

function EmployeeDataGrid() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getAll().then((res) => setEmployees(res.data));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (id?: number) => {
    if (id) {
      remove(id)
        .then(() => {
          setEmployees((current) =>
            current.filter((employee) => employee.id !== id)
          );
        })
        .finally(() => setOpen(false));
    } else setOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      hide: true,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      headerClassName: "grid-header",
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 2,
      headerClassName: "grid-header",
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      type: "date",
      headerClassName: "grid-header",
      valueFormatter: (params) => moment(params.value).format("MMMM, YYYY"),
    },
    {
      field: "team",
      headerName: "Team",
      flex: 1,
      headerClassName: "grid-header",
      valueFormatter: (params) => {
        if (params.value) return Team[params.value];
        else return "N/A";
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "grid-header",
      renderCell: (params) => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{ background: "#dadada", color: "white" }}
              variant="contained"
              size="small"
            >
              <EditOutlined />
            </Button>
            <Button
              style={{ background: "#f4364c", color: "white" }}
              variant="contained"
              size="small"
              onClick={handleClickOpen}
            >
              <DeleteForeverOutlined />
            </Button>
            <Dialog
              open={open}
              onClose={() => handleClose()}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">DELETE EMPLOYEE</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This action is irreversible. Are you sure you want to delete
                  this employee?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose()} autoFocus>
                  Cancel
                </Button>
                <Button onClick={() => handleClose(params.row.id)}>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      },
    },
  ];

  return (
    <div className="grid-container">
      <Button
        className="btn-add"
        style={{ background: "#7ce0d3", color: "white" }}
        variant="contained"
        size="large"
      >
        <AddOutlined />
        ADD EMPLOYEE
      </Button>
      <DataGrid
        autoHeight
        disableSelectionOnClick
        sortModel={[{ field: "id", sort: "desc" }]}
        rows={employees}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default EmployeeDataGrid;
