import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import { ButtonComponent } from './componets/button/button.component';


@NgModule({
  declarations: [InputRefDirective, ButtonComponent],
  exports: [InputRefDirective, ButtonComponent],
  imports: [CommonModule]
})
export class SharedModule {
}
