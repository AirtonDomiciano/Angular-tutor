import { Subscription } from 'rxjs';
import { Directive, Injectable, OnDestroy } from "@angular/core";

@Directive()
export abstract class BaseComponentDirective implements OnDestroy {
    subscriptions: Subscription[] = [];

    constructor(){}

    ngOnDestroy(): void {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    protected addSubscriptions(...subs: Subscription[]) {
        console.log(`Vamos Ver ${subs}`)
        this.subscriptions.push(...subs);
        this.subscriptions
    }
}