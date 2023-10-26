import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';


const routes: Routes = [
  { path: "pokemon/:path", component: PaginaPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
