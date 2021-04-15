import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsBookComponent } from './details-book/details-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import {FormsModule} from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllBooksComponent,
    DetailsBookComponent,
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent
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
