import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import {ButtonComponent} from './components/button/button.component';
import {TabButtonComponent} from './components/tab-button/tab-button.component';
import {TableComponent} from './components/table/table.component';
import {TableOccupiedComponent} from './components/table-occupied/table-occupied.component';
import {TableDirtyComponent} from './components/table-dirty/table-dirty.component';
import {ModalComponent} from './components/modal/modal.component';
import {OrderComponent} from './components/order/order.component';


@NgModule({
  declarations: [
    InputRefDirective,
    ButtonComponent,
    TabButtonComponent,
    TableComponent,
    TableOccupiedComponent,
    TableDirtyComponent,
    ModalComponent,
    OrderComponent
  ],
  exports: [
    InputRefDirective,
    ButtonComponent,
    TabButtonComponent,
    TableComponent,
    ModalComponent,
    OrderComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {
}
