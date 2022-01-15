import { MessageService } from './../messages/message.service';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  subscription: Subscription

  selectedHero: HeroesInterface;
  heroes: HeroesInterface[] = [];

  constructor(
    public http: HeroesService,
    public httpMessage: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
   this.subscription = this.http.getHeroes()
        .subscribe(heroes => console.log(this.heroes = heroes));
  }

  onSelect(hero: HeroesInterface): void {
    this.selectedHero = hero;
    this.httpMessage.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
