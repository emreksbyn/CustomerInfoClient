import { Customer } from "./customer";

export interface TelephoneNumber {
    id: number;
    description: string;
    telephoneNo: string;
    customerId: number;
    customer: Customer;
}