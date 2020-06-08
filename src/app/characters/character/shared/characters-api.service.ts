import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '924d714a8847e6e91ab2f99942d410ad';
  HASH = '3284269f194910347cf9bd0db26c5379';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

    getAllCharacters(): Observable<any>{
      return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
    }



}


