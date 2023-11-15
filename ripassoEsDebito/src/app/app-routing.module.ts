import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';


const routes: Routes = [
  { path: "type/:path", component: PaginaPokemonComponent },
  { path: "", component: MainPageComponent },
  {path: "pokemon/:path", component: InfoPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
