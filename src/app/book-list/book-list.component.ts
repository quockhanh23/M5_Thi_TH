import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";
import {DialogService} from "../services/dialog.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogInstallComponent} from "../dialog-install/dialog-install.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book!: Book[]

  constructor(private bookService: BookService,
              private router: Router,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(result => {
      this.book = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }


  deleteBook(id: any) {

    this.bookService.delete(id).subscribe(() => {
      this.ngOnInit()
      // @ts-ignore
      document.getElementById("alo").innerHTML = "Delete successful!"
      this.bookService.notify2()
    })

  }

  countAllBook() {
    let count = 0
    for (let i = 0; i < this.book.length; i++) {
      count = this.book.length
      console.log(count)
      // @ts-ignore
      document.getElementById('alo2').innerHTML = "Total: " + count
    }
    return count
  }
}
