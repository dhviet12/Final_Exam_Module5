import {Component, OnInit} from '@angular/core';
import {IBook} from '../interface-books/ibook';
import {BookService} from '../service-books/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  id: number;
  book: IBook;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      bookService.findBookById(this.id).subscribe(b => {
        this.book = b;
      });
    });
  }

  ngOnInit(): void {
  }

}
