import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatInput,
    MatFormField
  ]
})
export class SharedModule { }
