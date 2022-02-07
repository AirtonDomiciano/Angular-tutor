import { HeroesInterface } from './../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../heroService/hero.service';

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

  getHeroes(): void {
    this.http.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
