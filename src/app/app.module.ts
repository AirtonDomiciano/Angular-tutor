import { MessagesModule } from './messages/messages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { FormsModule } from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HeroDetailModule,
    HeroesModule,
    MessagesModule,
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
