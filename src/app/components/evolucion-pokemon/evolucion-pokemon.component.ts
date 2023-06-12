import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from 'src/app/app/model/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DetallesPokemonComponent } from '../detalles-pokemon/detalles-pokemon.component';

@Component({
  selector: 'app-evolucion-pokemon',
  templateUrl: './evolucion-pokemon.component.html',
  styleUrls: ['./evolucion-pokemon.component.sass'],
})
export class EvolucionPokemonComponent implements OnInit {
  listaPokemons: any[] = [];
  count: number = 1;

  constructor(
    private dialog: MatDialog,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.listarEvolucion(this.count);
  }

  listarEvolucion(id: number) {
    this.listaPokemons = [];
    let pokemonData;

    this.pokemonService.evolucionPokemon(id).subscribe(
      (resp) => {
        pokemonData = {
          name: resp.chain.species.name,
          imagen: null,
        };
        this.listaPokemons.push(pokemonData);
        if (resp.chain.evolves_to.length !== 0) {
          pokemonData = {
            name: resp.chain.evolves_to[0].species.name,
            imagen: null,
          };
          this.listaPokemons.push(pokemonData);
          if (resp.chain.evolves_to[0].evolves_to.length !== 0) {
            pokemonData = {
              name: resp.chain.evolves_to[0].evolves_to[0].species.name,
              imagen: null,
            };
            this.listaPokemons.push(pokemonData);
          }
        }
        this.obtenerImagen();
      },
      (err) => {
        console.log('error', err);
      }
    );

    console.log('lista', this.listaPokemons);
  }

  obtenerImagen() {
    for (let i = 0; i < this.listaPokemons.length; i++) {
      this.pokemonService.detallesPokemon(this.listaPokemons[i].name).subscribe(
        (resp) => {
          this.listaPokemons[i].imagen = resp.sprites.front_default;
        },
        (err) => {
          console.log('error', err);
        }
      );
    }
  }

  siguienteEvolucion() {
    this.count++;
    this.listarEvolucion(this.count);
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
