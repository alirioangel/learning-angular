import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
