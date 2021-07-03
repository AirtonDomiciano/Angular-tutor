import { HeroesComponent } from './heroes.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [HeroesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeroesModule { }
