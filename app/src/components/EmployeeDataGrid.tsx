import React from "react";
import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import Employee from "../entities/Employee";
import { Gender } from "../entities/Enums/Gender";
import { Team } from "../entities/Enums/Team";

function EmployeeDataGrid() {
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
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>{"Team"}</strong>
      ),
      flex: 1,
      headerClassName: "grid-header",
      valueFormatter: (params) => {
        if (params.value) return Team[params.value];
        else return "N/A";
      },
    },
  ];

  const rows: Employee[] = [
    {
      id: 1,
      name: "Leonardo Prietsch Oliveira",
      birthDate: new Date(1997, 8, 18),
      CPF: "12345678910",
      gender: Gender.Male,
      startDate: new Date(),
      email: "username.lastname@gmail.com",
      team: 1,
    },
    {
      id: 2,
      name: "Jane Doe",
      birthDate: new Date(1999, 8, 10),
      CPF: "12345678910",
      gender: Gender.Female,
      startDate: new Date(),
      email: "username.lastname@gmail.com",
      team: 2,
    },
    {
      id: 3,
      name: "João Santos",
      birthDate: new Date(1996, 7, 15),
      CPF: "12345678910",
      gender: Gender.Male,
      startDate: new Date(),
      email: "username.lastname@gmail.com",
    },
    {
      id: 4,
      name: "John Doe",
      birthDate: new Date(1996, 11, 31),
      CPF: "12345678910",
      gender: Gender.Male,
      startDate: new Date(),
      email: "username.lastname@gmail.com",
      team: 2,
    },
  ];

  return (
    <div style={{ height: "80%", width: "90%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default EmployeeDataGrid;
