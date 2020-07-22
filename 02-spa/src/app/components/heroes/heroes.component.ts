import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../model/hero.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService ) {
    console.log("This is the constructor");
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
