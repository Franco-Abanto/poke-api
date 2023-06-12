import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolucionPokemonComponent } from './components/evolucion-pokemon/evolucion-pokemon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-pokemon', component: ListaPokemonComponent },
  { path: 'evolucion-pokemon', component: EvolucionPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
