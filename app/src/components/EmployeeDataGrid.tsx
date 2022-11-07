import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, TablePagination } from "@mui/material";
import Employee from "../entities/Employee";
import { Team } from "../entities/Enums/Team";
import { getAll } from "../api/employeeClient";

function EmployeeDataGrid() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAll().then((res) => setEmployees(res.data));
  }, []);

  const columns: GridColDef[] = [
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
      renderCell: () => {
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{ background: "#7ce0d3" }}
              variant="contained"
              size="small"
            >
              Edit
            </Button>
            <Button
              style={{ background: "#f4364c" }}
              variant="contained"
              size="small"
            >
              Remove
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ flex: 1, overflow: "auto", margin: "100px" }}>
      <DataGrid
        autoHeight
        rows={employees}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default EmployeeDataGrid;
