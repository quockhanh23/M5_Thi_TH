import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {BadgeOverviewExampleComponent} from './badge-overview-example/badge-overview-example.component';
import {FormFieldAppearanceExampleComponent} from './form-field-appearance-example/form-field-appearance-example.component';
import {DialogComponent} from './dialog/dialog.component';
import {DialogInstallComponent} from './dialog-install/dialog-install.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailComponent,
    BadgeOverviewExampleComponent,
    FormFieldAppearanceExampleComponent,
    DialogComponent,
    DialogInstallComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}

