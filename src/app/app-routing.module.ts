import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookEditComponent} from "./book-edit/book-edit.component";

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/list'},

  {
    path: 'list', component: BookListComponent
  },
  {
    path: 'create', component: BookCreateComponent
  },
  {
    path: 'edit/:id', component: BookEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
