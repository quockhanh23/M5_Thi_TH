import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book!: Book[]
  constructor(private bookService: BookService,
              private router: Router,) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(result => {
      this.book = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }
  deleteBook(id: any) {
    if (confirm("Really want delete?")) {
      this.bookService.delete(id).subscribe(() => {
        this.ngOnInit()
        // @ts-ignore
        document.getElementById("alo").innerHTML = "Delete successful!"
        this.bookService.notify2()
      })
    }
  }
}
