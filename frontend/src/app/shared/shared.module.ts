import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputRefDirective} from './directives/input-ref.directive';
import {ButtonComponent} from './components/button/button.component';
import {TabButtonComponent} from './components/tab-button/tab-button.component';
import {TableComponent} from './components/table/table.component';
import {TableOccupiedComponent} from './components/table-occupied/table-occupied.component';
import {ModalComponent} from './components/modal/modal.component';
import {OrderComponent} from './components/order/order.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {OrderItemComponent} from './components/order-item/order-item.component';
import { PreparationItemComponent } from './components/preparation-item/preparation-item.component';
import { FilterDetailPipe } from './pipes/filter-detail.pipe';


@NgModule({
  declarations: [
    InputRefDirective,
    ButtonComponent,
    TabButtonComponent,
    TableComponent,
    TableOccupiedComponent,
    ModalComponent,
    OrderComponent,
    MenuItemComponent,
    OrderItemComponent,
    PreparationItemComponent,
    FilterDetailPipe
  ],
  exports: [
    InputRefDirective,
    ButtonComponent,
    TabButtonComponent,
    TableComponent,
    ModalComponent,
    OrderComponent,
    PreparationItemComponent,
    FilterDetailPipe
  ],
  imports: [CommonModule]
})
export class SharedModule {
}
