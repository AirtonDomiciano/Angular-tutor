import { Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export default class BaseService implements OnDestroy {
  subscriptions: Subscription[] = [];
    
  constructor(){}
    
  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  protected addSubscriptions(...subs: Subscription[]) {
    this.subscriptions.push(...subs);
    this.subscriptions
  }
}