import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/app/model/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PageEvent } from '@angular/material/paginator';
import { DetallesPokemonComponent } from '../detalles-pokemon/detalles-pokemon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.sass'],
})
export class ListaPokemonComponent implements OnInit {
  listaPokemons: Pokemon[] = [];
  paginatedPokemons: any[] = [];
  pageSize = 12;
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.listarPokemones();
  }

  listarPokemones() {
    this.loading = true;
    setTimeout(() => {
      for (let i = 1; i < 101; i++) {
        this.pokemonService.listarPokemons(i).subscribe(
          (resp) => {
            this.listaPokemons.push(resp);
            this.paginatedPokemons = this.listaPokemons.slice(0, this.pageSize);
            this.loading = false;
          },
          (err) => {
            console.log('error', err);
            this.loading = false;
          }
        );
      }
    }, 1000);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedPokemons = this.listaPokemons.slice(startIndex, endIndex);
  }

  abrirDetalles(pokemon: Pokemon) {
    const dialogRef = this.dialog.open(DetallesPokemonComponent, {
      width: '25%',
      autoFocus: false,
      disableClose: true,
      panelClass: 'myapp-no-padding-dialog',
      data: { pokemon: pokemon },
    });
  }
}
