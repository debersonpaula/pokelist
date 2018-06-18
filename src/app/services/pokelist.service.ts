import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../interfaces/pokelist.interface';

@Injectable({
  providedIn: 'root'
})
export class PokelistService {

  public pokeapiURL = 'https://pokeapi.co/api/v2';
  public pokelistURL = `${this.pokeapiURL}/pokemon`;

  constructor(private http: HttpClient) { }

  getPokeList(limit: string, offset: string): Observable<PokemonList> {
    const result: any = this.http.get(`${this.pokelistURL}`, { params: { limit, offset } });
    return result;
  }

  getPokemon(url: string): Observable<any> {
    const result: any = this.http.get(url);
    return result;
  }
}
