import { MessagesComponent } from './messages.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [MessagesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MessagesModule { }
