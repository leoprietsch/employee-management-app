import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { EditOutlined } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Gender } from "../entities/Enums/Gender";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Team } from "../entities/Enums/Team";
import Employee from "../entities/Employee";
import { update } from "../api/employeeClient";
import { AxiosResponse } from "axios";

type Props = {
  employee: Employee;
  setEmployees: (action: React.SetStateAction<Employee[]>) => void;
};

function EditDialogForm({ employee, setEmployees }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(employee.name ?? "");
  const [birthDate, setBirthDate] = useState(employee.birthDate ?? new Date());
  const [gender, setGender] = useState(employee.gender ?? 0);
  const [email, setEmail] = useState(employee.email ?? "");
  const [cpf, setCpf] = useState(employee.cpf ?? "");
  const [startDate, setStartDate] = useState(employee.startDate ?? new Date());
  const [team, setTeam] = useState<Team>(employee.team ?? 0);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    update(employee.id as number, {
      name,
      birthDate,
      gender,
      email,
      cpf,
      startDate,
      team: team in Team ? team : null,
    })
      .then((res: AxiosResponse) => {
        setEmployees((current) => {
          const index = current.findIndex((e) => e.id === employee.id);
          current[index] = res.data as Employee;
          return [...current];
        });
      })
      .catch((e) => {
        console.log(e.response);
      })
      .finally(() => setOpen(false));
  };

  return (
    <>
      <Button
        style={{ background: "#aaa9a9", color: "white" }}
        variant="contained"
        size="small"
        onClick={handleOpen}
      >
        <EditOutlined />
      </Button>
      <Dialog open={open} onClose={handleOpen}>
        <DialogTitle>Edit employee</DialogTitle>
        <DialogContent
          style={{
            height: "500px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            autoFocus
            required
            id="name"
            label="Name"
            value={name}
            inputProps={{ minLength: 3, maxLength: 100 }}
            type="text"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Birth date"
              renderInput={(params: any) => <TextField {...params} />}
              value={birthDate}
              maxDate={new Date()}
              onChange={(date: any) => setBirthDate(date)}
            />
          </LocalizationProvider>
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              defaultValue={gender}
              variant="outlined"
              labelId="gender-label"
              id="gender"
              value={gender}
              label="Gender"
              onChange={(e) => setGender(e.target.value as number)}
            >
              <MenuItem value={Gender.Female}>Female</MenuItem>
              <MenuItem value={Gender.Male}>Male</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="email"
            label="E-mail address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="outlined"
            inputProps={{ maxLength: 100 }}
          />
          <TextField
            required
            id="cpf"
            label="CPF"
            type="number"
            onChange={(e) => setCpf(e.target.value)}
            inputProps={{
              minlenght: 11,
              maxLength: 11,
            }}
            value={cpf}
            fullWidth
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Start date"
              renderInput={(params: any) => <TextField {...params} />}
              value={startDate}
              views={["month", "year"]}
              onChange={(date: any) => setStartDate(date)}
            />
          </LocalizationProvider>
          <FormControl required fullWidth>
            <InputLabel id="team-label">Team</InputLabel>
            <Select
              defaultValue={team}
              variant="outlined"
              labelId="team-label"
              id="team"
              value={team}
              label="Team"
              onChange={(e) => setTeam(e.target.value as number)}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={Team["Back-end"]}>Back-end</MenuItem>
              <MenuItem value={Team["Front-end"]}>Front-end</MenuItem>
              <MenuItem value={Team["Mobile"]}>Mobile</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleOpen}>
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ background: "#00aec7" }}
            onClick={() => handleEdit()}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { EditDialogForm };
