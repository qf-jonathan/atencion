import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import {ButtonComponent} from './components/button/button.component';
import {TabButtonComponent} from './components/tab-button/tab-button.component';
import {TableComponent} from './components/table/table.component';
import {TableOccupiedComponent} from './components/table-occupied/table-occupied.component';
import {TableDirtyComponent} from './components/table-dirty/table-dirty.component';


@NgModule({
  declarations: [
    InputRefDirective,
    ButtonComponent,
    TabButtonComponent,
    TableComponent,
    TableOccupiedComponent,
    TableDirtyComponent
  ],
  exports: [InputRefDirective, ButtonComponent, TabButtonComponent, TableComponent],
  imports: [CommonModule]
})
export class SharedModule {
}
