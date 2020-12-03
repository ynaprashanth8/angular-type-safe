import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormBuilderTypeSafe } from './helper/angular-type-safe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ProfileEditorComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [FormBuilderTypeSafe],
  bootstrap: [AppComponent],
})
export class AppModule {}
