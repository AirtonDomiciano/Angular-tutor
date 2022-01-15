import { MessageService } from './../messages/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroesInterface } from './../interfaces/heroes.interface';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  constructor(
      private messageService:MessageService
  ) { }

  getHeroes(): Observable<HeroesInterface[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}