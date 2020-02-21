import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import {ButtonComponent} from './components/button/button.component';
import {TabButtonComponent} from './components/tab-button/tab-button.component';


@NgModule({
  declarations: [InputRefDirective, ButtonComponent, TabButtonComponent],
  exports: [InputRefDirective, ButtonComponent, TabButtonComponent],
  imports: [CommonModule]
})
export class SharedModule {
}
