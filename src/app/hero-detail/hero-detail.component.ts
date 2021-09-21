import { Component, Input, OnInit } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes.interface';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: HeroesInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
