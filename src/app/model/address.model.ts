import { BaseModel } from './base.model';

export interface Address extends BaseModel {
  street: string;
  country: string;
  zip: string;
}
