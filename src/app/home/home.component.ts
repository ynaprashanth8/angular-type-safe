import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilderTypeSafe,
  FormGroupTypeSafe,
} from '../helper/angular-type-safe';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';
import { Profile } from '../profile-editor/profile-editor.model';
import { HomeViewModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild(ProfileEditorComponent, { static: true })
  profileForm!: ProfileEditorComponent;

  form!: FormGroupTypeSafe<HomeViewModel>;

  constructor(private fb: FormBuilderTypeSafe) {}

  ngOnInit(): void {
    this.form = this.fb.group<HomeViewModel>({
      // Error Type 'FormGroupTypeSafe<Profile>' is not assignable to type 'FormControl | FormGroup | FormArray'.
      // Type 'FormGroupTypeSafe<Profile>' is not assignable to type 'FormGroup'.
      //   Types of property 'controls' are incompatible.
      //     Type '{ name: AbstractControlTypeSafe<string>; age?: AbstractControlTypeSafe<string | undefined> | undefined; email: AbstractControlTypeSafe<string>; address: AbstractControlTypeSafe<...>; }' is not assignable to type '{ [key: string]: AbstractControl; }'.
      //       Property 'age' is incompatible with index signature.
      //         Type 'AbstractControlTypeSafe<string | undefined> | undefined' is not assignable to type 'AbstractControl'.
      //           Type 'undefined' is not assignable to type 'AbstractControl'.
      profile: this.profileForm.createGroup(),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  // I am seeing an error If I use getSafe
  // get profileSafe(): FormGroupTypeSafe<Profile> {
  //   return this.form.getSafe(f => f.profile) as FormGroupTypeSafe<Profile>;
  // }

  get profile(): FormGroupTypeSafe<Profile> {
    return this.form.get('profile') as FormGroupTypeSafe<Profile>;
  }
}
