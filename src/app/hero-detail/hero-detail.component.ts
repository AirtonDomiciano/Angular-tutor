import { Component, Input, OnInit } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../heroService/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: HeroesInterface;
  
  constructor(
    // O ActivatedRoutecontém informações sobre a rota para esta instância do HeroDetailComponent. Este componente está interessado nos parâmetros da rota extraídos da URL. O parâmetro "id" é o iddo herói a ser exibido.
    private route: ActivatedRoute,
    
    // O HeroServiceobtém dados de herói do servidor remoto e este componente os usará para obter o herói para exibição.
    private heroService: HeroService,
    
    // O locationé um serviço Angular para interagir com o navegador. Você o usará mais tarde para navegar de volta para a visualização que navegou aqui.
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
  }

}
