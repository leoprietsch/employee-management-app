import Employee from "../entities/Employee";
import http from "./http-common";

export const getAll = () => http.get<Array<Employee>>("/employee");

export const getById = (id: number) =>
  http.get<Array<Employee>>(`/employee/${id}`);

export const create = (employee: Employee) =>
  http.post<Employee>(`/employee`, employee);

export const update = (id: number, employee: Employee) =>
  http.put<Employee>(`/employee/${id}`, employee);

export const remove = (id: number) =>
  http.delete<Array<Employee>>(`/employee/${id}`);
