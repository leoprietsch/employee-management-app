import "../App.css";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Employee from "../entities/Employee";
import { Team } from "../entities/Enums/Team";
import { getAll } from "../api/employeeClient";
import { AddDialogForm } from "./AddDialogForm";
import { EditDialogForm } from "./EditDialogForm";
import { DeleteEmployeeButton } from "./DeleteEmployeeButton";
import { AxiosResponse } from "axios";

function EmployeeGrid() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAll().then((res: AxiosResponse) => setEmployees(res.data));
  }, []);

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
        const employee = employees.find((e) => e.id === params.row.id);
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <EditDialogForm employee={employee} setEmployees={setEmployees} />
            <DeleteEmployeeButton
              id={params.row.id}
              name={params.row.name}
              setEmployees={setEmployees}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="grid-container">
      <AddDialogForm setEmployees={setEmployees} />
      <DataGrid
        sx={{ background: "white", flex: 1 }}
        autoHeight
        disableSelectionOnClick
        rowHeight={45}
        sortModel={[{ field: "id", sort: "desc" }]}
        rows={[...employees]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export { EmployeeGrid };
