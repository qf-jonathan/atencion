import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AttentionComponent} from './attention.component';
import {AmbienceComponent} from './ambience/ambience.component';
import {PreparationComponent} from './preparation/preparation.component';

const routes: Routes = [
  {
    path: '',
    component: AttentionComponent,
    children: [
      {
        path: 'ambience/:id',
        component: AmbienceComponent
      },
      {
        path: 'preparation/:id',
        component: PreparationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttentionRoutingModule {
}
