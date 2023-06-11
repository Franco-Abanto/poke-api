import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseEndPoint = environment.urlEndPoint;

  constructor(private http: HttpClient) {}

  public listarPokemons(id: Number): Observable<any> {
    return this.http.get<any>(`${this.baseEndPoint}pokemon/${id}`);
  }

  public detallesPokemon(name: String): Observable<any> {
    return this.http.get<any>(`${this.baseEndPoint}pokemon/${name}`);
  }
}
