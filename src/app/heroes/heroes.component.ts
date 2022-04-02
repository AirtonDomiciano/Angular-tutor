import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroService } from 'src/app/heroService/hero.service';
import { HeroesInterface } from 'src/app/interfaces/heroes.interface';
import { MessageService } from 'src/app/messages/message.service';
import { BaseComponentDirective } from '../abstract/base-component';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent extends BaseComponentDirective implements OnInit {

  subscription: Subscription
  startIndex = 0;
  endIndex = 5;
  getArrayList = []

  selectedHero: HeroesInterface;
  heroes: HeroesInterface[] = [];

  constructor(
    public http: HeroService,
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

  // onSelect(hero: HeroesInterface): void {
  //   this.selectedHero = hero;
  //   this.httpMessage.add(
  //     `Selected hero ${hero.id}-${hero.name} `
  //   );
  // }

  getIndex(pageIndex) {
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
    console.log(this.startIndex);
  }

  prevIndex(length) {
    this.endIndex -= 1;
    console.log(this.startIndex);
  }

  nextIndex(endIndex) {
    this.endIndex += 1;
    console.log(this.endIndex);
  }

  getArrayLenght(length) {
    if (!length){
      return []
    }

    if (length <= 5) { 
      this.getArrayList =  [];
    } else if (length <= 50) {
      this.getArrayList =  new Array(Math.trunc(length / 5))
    } else if (length <= 100) {
      this.getArrayList = new Array(Math.trunc(length / 10));
    }
        
    return this.getArrayList
    
  }

}
