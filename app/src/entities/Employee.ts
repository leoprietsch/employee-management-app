import { Gender } from "./Enums/Gender";
import { Team } from "./Enums/Team";

export default interface Employee {
  id?: number;
  name: string;
  birthDate: Date;
  gender: Gender;
  email: string;
  CPF: string;
  startDate: Date;
  team?: Team;
}
