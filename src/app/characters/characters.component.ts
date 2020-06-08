import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharactersApiService) { }
  allCharacters: Observable<any>;
  ngOnInit() {
    this.getCharacters();
  }
  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacters();
  }

}
