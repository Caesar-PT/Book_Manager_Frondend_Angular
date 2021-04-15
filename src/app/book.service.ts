import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBook(): Observable<Book[]>{
    return this.httpClient.get<Book[]>('http://localhost:3000/books')
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>('http://localhost:3000/books/' + id)
  }

  updateBook(id: number, book: Book): Observable<Book>{
    return this.httpClient.put<Book>('http://localhost:3000/books/' + id, book)
  }

  createBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>('http://localhost:3000/books', book)
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>('http://localhost:3000/books/' + id)
  }
}
