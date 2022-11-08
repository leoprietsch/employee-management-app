import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddOutlined } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Gender } from "../entities/Enums/Gender";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Team } from "../entities/Enums/Team";
import Employee from "../entities/Employee";
import { create } from "../api/employeeClient";
import { AxiosResponse } from "axios";

type Props = {
  setEmployees: (action: React.SetStateAction<Employee[]>) => void;
};

function AddDialogForm({ setEmployees }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [gender, setGender] = useState(0);
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [team, setTeam] = useState<Team>(0);

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    create({
      name,
      birthDate: birthDate as Date,
      gender,
      email,
      cpf,
      startDate: startDate as Date,
      team: team in Team ? team : null,
    })
      .then((res: AxiosResponse) => {
        setEmployees((current) => [...current, res.data as Employee]);
      })
      .catch((error) => console.log(error))
      .finally(() => setOpen(false));
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
        onClick={handleDialog}
      >
        <AddOutlined />
        ADD EMPLOYEE
      </Button>
      <Dialog open={open} onClose={handleDialog}>
        <DialogTitle>Add new employee</DialogTitle>
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
            onChange={(e) => setCpf(e.target.value)}
            inputProps={{
              minlenght: 11,
              maxLength: 11,
            }}
            value={cpf}
            type="text"
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
          <Button variant="outlined" onClick={handleDialog}>
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

export { AddDialogForm };
