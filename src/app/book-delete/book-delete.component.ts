import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {Subscription} from 'rxjs';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  sub: Subscription | undefined;

  id: number = 0;

  constructor(private bookService: BookService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }

  getBook(id: number) {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
