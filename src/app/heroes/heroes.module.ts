import { HeroesComponent } from './heroes.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  schemas: []
})
export class HeroesModule { }
