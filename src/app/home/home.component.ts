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
  profileForm: ProfileEditorComponent;

  form: FormGroupTypeSafe<HomeViewModel>;

  constructor(private fb: FormBuilderTypeSafe) {}

  ngOnInit(): void {
    this.form = this.fb.group<HomeViewModel>({
      profile: this.profileForm.createGroup(),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  get profile(): FormGroupTypeSafe<Profile> {
    return this.form.get('profile') as FormGroupTypeSafe<Profile>;
  }
}
