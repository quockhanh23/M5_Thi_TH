import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";
import {Book} from "../models/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Book

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      console.log(id)
      this.bookService.getById(id).subscribe(res => {
        this.book = res
      }, error => {
        console.log('lỗi')
      })
    })
  }
}
