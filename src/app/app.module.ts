import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { EvolucionPokemonComponent } from './components/evolucion-pokemon/evolucion-pokemon.component';
import { MatListModule } from '@angular/material/list';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ListaPokemonComponent,
    EvolucionPokemonComponent,
    InicioComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
