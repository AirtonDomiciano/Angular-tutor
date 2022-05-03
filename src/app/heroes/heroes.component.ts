import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroService } from 'src/app/heroes/heroes.service';
import { HeroesInterface } from 'src/app/interfaces/heroes.interface';
import { MessageService } from 'src/app/messages/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  subscription: Subscription
  startIndex = 0;
  endIndex = 5;
  getArrayList = []

  selectedHero: HeroesInterface;
  heroes: HeroesInterface[] = [];

  constructor(
    public http: HeroService,
    public httpMessage: MessageService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  async getHeroes(): Promise<void> {
   this.heroes = await this.http.getHeroes()
  }

  onSelect(hero: HeroesInterface): void {
    this.router.navigate([`detail/${hero.id}`]);
  }

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
