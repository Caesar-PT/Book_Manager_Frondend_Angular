import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  sub: Subscription | undefined;
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  }
  id: number = 0;

  constructor(private bookService: BookService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
  }

  getBook(id: number){
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    })
  }

}
