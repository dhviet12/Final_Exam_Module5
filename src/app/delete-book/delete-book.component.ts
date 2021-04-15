import {Component, OnInit} from '@angular/core';
import {BookService} from '../service-books/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IBook} from '../interface-books/ibook';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id: number;
  book: IBook;


  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      bookService.findBookById(this.id).subscribe(b => {
        this.book = b;
      });
    });
  }

  ngOnInit(): void {
  }


  deleteBook() {
    this.bookService.deleteBook(this.id).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }
}
