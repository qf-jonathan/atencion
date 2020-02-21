import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttentionRoutingModule } from './attention-routing.module';
import { AttentionComponent } from './attention.component';


@NgModule({
  declarations: [AttentionComponent],
  imports: [
    CommonModule,
    AttentionRoutingModule
  ]
})
export class AttentionModule { }
