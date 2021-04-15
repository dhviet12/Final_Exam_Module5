import {Component, OnInit} from '@angular/core';
import {IBook} from '../interface-books/ibook';
import {BookService} from '../service-books/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  sub: Subscription;
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  id: number;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      bookService.findBookById(this.id).subscribe(result => {
        this.book = result;
      });
    });
  }

  ngOnInit(): void {
  }

  editBook() {
    this.bookService.editBook(this.book.id, this.book).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
