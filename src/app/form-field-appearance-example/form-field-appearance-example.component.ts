import { Component, OnInit } from '@angular/core';
import {DialogInstallComponent} from "../dialog-install/dialog-install.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-form-field-appearance-example',
  templateUrl: './form-field-appearance-example.component.html',
  styleUrls: ['./form-field-appearance-example.component.css']
})
export class FormFieldAppearanceExampleComponent implements OnInit {
  hide = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogInstallComponent);
  }
}
