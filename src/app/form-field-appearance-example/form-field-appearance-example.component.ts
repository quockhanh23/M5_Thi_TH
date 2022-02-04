import { Component, OnInit } from '@angular/core';
import {DialogInstallComponent} from "../dialog-install/dialog-install.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-form-field-appearance-example',
  templateUrl: './form-field-appearance-example.component.html',
  styleUrls: ['./form-field-appearance-example.component.css']
})
export class FormFieldAppearanceExampleComponent implements OnInit {
  hide = true;
  loading = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogInstallComponent);
  }
  openDialog1() {
    this.dialog.open(DialogComponent);
  }
  change() {
    this.loading = false;
  }
}
