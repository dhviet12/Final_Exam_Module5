import {Component, OnInit} from '@angular/core';
import {IBook} from '../interface-books/ibook';
import {BookService} from '../service-books/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
  }
  createBook(){
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

}
