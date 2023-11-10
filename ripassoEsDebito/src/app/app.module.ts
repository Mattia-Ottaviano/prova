import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPokemonComponent,
    MainPageComponent,
    InfoPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
