import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../interface-books/ibook';


const URL_SERVER = ' http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(URL_SERVER + `books`);
  }

  findBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(URL_SERVER + `books/${id}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(URL_SERVER + `books`, book);
  }

  editBook(id: number, book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(URL_SERVER + `books/${id}`, book);
  }

  deleteBook(id: number): Observable<IBook> {
    return this.httpClient.delete<IBook>(URL_SERVER + `books/${id}`);
  }


}
