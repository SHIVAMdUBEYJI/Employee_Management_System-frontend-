export class Employee {
  id?: number;
  fullName?: string;
  address?: string;
  designation?: string;
  department?: string;
  joiningDate?: Date;
  salary?: number;
  disability?: 'Yes' | 'No';
  typeOfDisability?: string;
  email?: string;
  contact?: number;

  constructor(
    fullName: string = '',
    address: string = '',
    designation: string = '',
    department: string = '',
    joiningDate: Date = new Date(),
    salary: number = 0,
    disability: 'Yes' | 'No' = 'No',
    typeOfDisability: string = '', // moved here
    email: string = '',
    contact: number = 0,
    id: number = 0
  ) {
    this.fullName = fullName;
    this.address = address;
    this.designation = designation;
    this.department = department;
    this.joiningDate = joiningDate;
    this.salary = salary;
    this.disability = disability;
    this.typeOfDisability = typeOfDisability;
    this.email = email;
    this.contact = contact;
    this.id = id;
  }
}
