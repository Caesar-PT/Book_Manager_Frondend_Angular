import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
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
    })
  }

  ngOnInit(): void {
  }

  getBook(id: number) {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

  updateBook(){
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    })
  }


}
