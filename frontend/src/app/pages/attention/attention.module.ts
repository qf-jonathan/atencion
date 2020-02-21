import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AttentionRoutingModule} from './attention-routing.module';
import {AttentionComponent} from './attention.component';
import {AmbienceComponent} from './ambience/ambience.component';
import {PreparationComponent} from './preparation/preparation.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [AttentionComponent, AmbienceComponent, PreparationComponent],
  imports: [
    CommonModule,
    AttentionRoutingModule,
    SharedModule
  ]
})
export class AttentionModule {
}
