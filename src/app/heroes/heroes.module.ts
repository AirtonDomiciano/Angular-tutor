import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeroDetailModule
  ],
  exports: [HeroesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeroesModule { }
