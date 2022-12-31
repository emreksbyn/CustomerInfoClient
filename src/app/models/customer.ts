import { Address } from "./address";
import { TelephoneNumber } from "./telephoneNumber";

export interface Customer {
    id: number;
    name: string;
    surname: string;
    tcNo: string;
    email: string;
    addresses: Address[];
    telephoneNumbers: TelephoneNumber[];
}