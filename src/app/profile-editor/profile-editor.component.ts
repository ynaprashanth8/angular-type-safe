import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  FormBuilderTypeSafe,
  FormGroupTypeSafe,
} from '../helper/angular-type-safe';
import { Address, Profile } from './profile-editor.model';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  @Input() form: FormGroupTypeSafe<Profile>;

  constructor(private fb: FormBuilderTypeSafe) {}

  ngOnInit(): void {}

  createGroup() {
    return (this.form = this.fb.group<Profile>({
      name: this.fb.control(''),
      age: this.fb.control(''),
      email: this.fb.control(''),
      address: this.fb.group<Address>({
        street: this.fb.control(''),
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
