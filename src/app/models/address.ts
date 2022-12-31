import { Customer } from "./customer";

export interface Address {
    id: number;
    description: string;
    city: string;
    district: string;
    customerId: number;
    customer: Customer
}
