import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/app/model/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.sass'],
})
export class ListaPokemonComponent implements OnInit {
  listaPokemons: Pokemon[] = [];
  paginatedPokemons: any[] = [];
  pageSize = 12;
  currentPage = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.listarPokemones();
  }

  listarPokemones() {
    for (let i = 1; i < 101; i++) {
      this.pokemonService.listarPokemons(i).subscribe(
        (resp) => {
          this.listaPokemons.push(resp);
          this.paginatedPokemons = this.listaPokemons.slice(0, this.pageSize);
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
    console.log(this.listaPokemons);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedPokemons = this.listaPokemons.slice(startIndex, endIndex);
  }
}
