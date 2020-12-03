import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  FormBuilderTypeSafe,
  FormGroupTypeSafe,
} from '../helper/angular-type-safe';
//Cannot find module 'angular-typesafe-reactive-forms-helper' or its corresponding type declarations.ts(2307)
// import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper'

import { Address } from '../model/address.model';
import { Profile } from './profile-editor.model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  @Input() form!: FormGroupTypeSafe<Profile>;

  constructor(private fb: FormBuilderTypeSafe) {}

  ngOnInit(): void {}

  createGroup() {
    return (this.form = this.fb.group<Profile>({
      name: this.fb.control(''),
      age: this.fb.control(''),
      email: this.fb.control(''),
      // I am seeing the error when I have a Address interface extends a BaseModel interface
      //If I remove the extends inerface it works fine
      //  Error:     (property) address: FormGroup | FormControl | FormArray
      // Type 'FormGroupTypeSafe<Address>' is not assignable to type 'FormControl | FormGroup | FormArray'.
      //   Type 'FormGroupTypeSafe<Address>' is not assignable to type 'FormGroup'.
      //     Types of property 'controls' are incompatible.
      //       Type '{ street: AbstractControlTypeSafe<string>; country: AbstractControlTypeSafe<string>; zip: AbstractControlTypeSafe<string>; addressId?: AbstractControlTypeSafe<...> | undefined; }' is not assignable to type '{ [key: string]: AbstractControl; }'.
      //         Property 'addressId' is incompatible with index signature.
      //           Type 'AbstractControlTypeSafe<string | undefined> | undefined' is not assignable to type 'AbstractControl'.
      //             Type 'undefined' is not assignable to type 'AbstractControl'.ts(2322)
      // profile-editor.model.ts(7, 3): The expected type comes from property 'address' which is declared here on type 'FormGroupControlsOf<Profile>'
      address: this.fb.group<Address>({
        street: this.fb.control(''),
        country: this.fb.control(''),
        zip: this.fb.control(''),
      }),
    }));
  }

  get name(): AbstractControl | null {
    return this.form.getSafe((f) => f.name);
  }

  get age(): AbstractControl | null {
    return this.form.getSafe((f) => f.age);
  }

  get email(): AbstractControl | null {
    return this.form.getSafe((f) => f.email);
  }
}
