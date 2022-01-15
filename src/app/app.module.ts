import { MessagesModule } from './messages/messages.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroDetailModule,
    HeroesModule,
    MessagesModule
  ],
  exports: [
    HeroDetailModule,
    HeroesModule,
    MessagesModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule { }
