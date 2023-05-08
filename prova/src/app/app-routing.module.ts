import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'item-formula1/:id', component: SearchComponent },
  { path: 'search-formula1', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
