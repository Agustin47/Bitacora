import { HasId } from "./has-id";

export interface Water extends HasId {
    flowerId: string;
    date: string;
    product: string;
    amountInMillilitres: string;
}