import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookCreateComponent} from './book-create/book-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'books/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
