import { Address } from '../model/address.model';

export interface Profile {
  name: string;
  age?: string;
  email: string;
  address: Address;
}