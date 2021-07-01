import { HEROES } from './../mock-heroes';
import { HeroesInterface } from './heroes.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  selectedHero: HeroesInterface;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: HeroesInterface): void {
    this.selectedHero = hero;
  }

}
