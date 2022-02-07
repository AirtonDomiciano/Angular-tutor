import { MessageService } from '../messages/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroesInterface } from '../interfaces/heroes.interface';
import { HEROES } from '../mock-heroes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService:MessageService,
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<HeroesInterface[]> {
    return this.http.get<HeroesInterface[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<HeroesInterface> {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }


}