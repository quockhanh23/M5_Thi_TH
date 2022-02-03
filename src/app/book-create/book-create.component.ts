import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogInstallComponent} from "../dialog-install/dialog-install.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetComponent} from "../bottom-sheet/bottom-sheet.component";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit(): void {

  }
  openDialog() {
    this.dialog.open(DialogInstallComponent);
  }

  submit() {
    let book = {
      name: this.bookForm.value.name,
      title: this.bookForm.value.title,
      price: this.bookForm.value.price,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description,
    }
    this.bookService.save(book).subscribe(() => {
      this.openBottomSheet()
      this.router.navigate(["/list"]);
      this.bookService.notify1()
      this.bookService.notify2()
    })
  }

}
