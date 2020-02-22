import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import {ButtonComponent} from './components/button/button.component';
import {TabButtonComponent} from './components/tab-button/tab-button.component';
import {TableComponent} from './components/table/table.component';


@NgModule({
  declarations: [InputRefDirective, ButtonComponent, TabButtonComponent, TableComponent],
  exports: [InputRefDirective, ButtonComponent, TabButtonComponent, TableComponent],
  imports: [CommonModule]
})
export class SharedModule {
}
