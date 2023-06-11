import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { EvolucionPokemonComponent } from './components/evolucion-pokemon/evolucion-pokemon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetallesPokemonComponent } from './components/detalles-pokemon/detalles-pokemon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ListaPokemonComponent,
    EvolucionPokemonComponent,
    InicioComponent,
    MainComponent,
    DetallesPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
