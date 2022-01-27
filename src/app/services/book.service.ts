import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:3000/books'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL)
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book)
  }

  getById(id: any): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/${id}`)
  }

  update(id: any, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(API_URL + `/${id}`, book)
  }

  delete(id: any): Observable<Book> {
    return this.httpClient.delete<Book>(API_URL + `/${id}`)
  }
  notify1() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = "Successful!"
    }, 0)
  }

  notify2() {
    setTimeout(() => {
      // @ts-ignore
      document.getElementById("alo").innerHTML = " "
    }, 2000)
  }
}
