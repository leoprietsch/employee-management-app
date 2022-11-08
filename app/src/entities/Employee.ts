import { Gender } from "./Enums/Gender";
import { Team } from "./Enums/Team";

export default interface Employee {
  id?: number;
  name: string;
  birthDate: Date;
  gender: Gender;
  email: string;
  cpf: string;
  startDate: Date;
  team: Team | null;
}
