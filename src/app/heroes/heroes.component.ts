import { MessageService } from './../messages/message.service';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Subscription } from 'rxjs';
import { BaseComponentDirective } from '../abstract/base-component';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent extends BaseComponentDirective implements OnInit {

  subscription: Subscription

  selectedHero: HeroesInterface;
  heroes: HeroesInterface[] = [];

  constructor(
    public http: HeroesService,
    public httpMessage: MessageService,
  ) { 
    super()
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
   this.addSubscriptions(this.http.getHeroes()
      .subscribe(heroes => console.log(this.heroes = heroes)));
  }

  onSelect(hero: HeroesInterface): void {
    this.selectedHero = hero;
    this.httpMessage.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
