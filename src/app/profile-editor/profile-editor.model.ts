export interface Profile {
  name: string;
  age?: string;
  email: string;
  zip?: string;
  address: Address;
}

export interface Address {
  street: string;
}
