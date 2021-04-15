import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAllBooksComponent} from './list-all-books/list-all-books.component';
import {DetailsBookComponent} from './details-book/details-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';

const routes: Routes = [
  {
    path: '',
    component: ListAllBooksComponent
  },
  {
    path: 'details/:id',
    component: DetailsBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
