import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navItems = [
    { name: 'Inicio', link: '/inicio' },
    { name: 'Pokemons', link: '/lista-pokemon' },
    { name: 'Evoluciones', link: '/evolucion-pokemon' },
  ];
}
