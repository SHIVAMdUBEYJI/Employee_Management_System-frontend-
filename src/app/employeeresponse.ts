import { Employee } from "./employee";

export type Employeeresponse = {
  content: Employee[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}
