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
