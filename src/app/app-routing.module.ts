import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-pokemon', component: ListaPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
