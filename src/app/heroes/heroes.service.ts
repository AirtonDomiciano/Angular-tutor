import { async } from '@angular/core/testing';
import { MessageService } from '../messages/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroesInterface } from '../interfaces/heroes.interface';
import { HEROES } from '../mock-heroes';
import { HttpClient } from '@angular/common/http';
import BaseService from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService  extends BaseService{
  private heroesUrl = 'http://localhost:1001/api/v1/';

  constructor(
    private http: HttpClient,
    private messageService:MessageService,
  ) {
    super()
  }

  async getHeroes(): Promise<any> {
    return new Promise(async(resolve) => {
      const { heroes } = await 
        this.http
        .get<any>(this.heroesUrl + 'heroes')
        .pipe()
        .toPromise();

      resolve(heroes.data) ;
    })
  }
  
  getHero(id: number): Observable<HeroesInterface> {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}