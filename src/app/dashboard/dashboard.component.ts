import { HeroesInterface } from './../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroes/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: HeroesInterface[] = [];

  constructor(private http: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    this.heroes = await this.http.getHeroes().then((el) => {
     return el.slice(0,5);
    });
  }

}
