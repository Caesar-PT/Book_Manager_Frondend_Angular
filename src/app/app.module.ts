import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {FormsModule} from '@angular/forms';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookDetailComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
