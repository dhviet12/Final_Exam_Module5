import { Component, OnInit } from '@angular/core';
import {IBook} from '../interface-books/ibook';
import {BookService} from '../service-books/book.service';

@Component({
  selector: 'app-list-all-books',
  templateUrl: './list-all-books.component.html',
  styleUrls: ['./list-all-books.component.css']
})
export class ListAllBooksComponent implements OnInit {
  amount: number;
  listBooks: IBook[] = [];

  constructor(private bookService:BookService) {

  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(list =>{
      this.listBooks = list;
      this.amount= this.listBooks.length;
    })
  }

}
