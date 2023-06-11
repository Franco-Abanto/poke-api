import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Pokemon } from 'src/app/app/model/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.sass'],
})
export class DetallesPokemonComponent implements OnInit {
  pokemon!: any;

  constructor(
    private dialogRef: MatDialogRef<DetallesPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    console.log('data?', this.pokemon);
    this.detallesPokemon();
  }

  cerrarModal() {
    this.dialogRef.close();
  }

  detallesPokemon() {
    const name = this.data.pokemon.name;
    this.pokemonService.detallesPokemon(name).subscribe(
      (resp) => {
        this.pokemon = resp;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
