import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Category, Item, Table} from '../../services/api';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() table: Table;
  categories: Category[];
  currentTab: string;
  @Input() modalRef: ModalComponent;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.menu().subscribe((categories) => {
      this.categories = categories;
      if (this.categories.length !== 0) {
        this.currentTab = this.categories[0].name;
      }
    });
  }

  addItem(item: Item): void {
    if (this.table.invoice_set.length === 0) {
      this.table.invoice_set.push({
        table: this.table.url,
        detail_set: [],
        state: 1
      });
    }
    this.table.invoice_set[0].detail_set.push({
      item: item
    });
  }

  getTotal(): number {
    let total = 0.0;
    if (this.table.invoice_set[0]) {
      this.table.invoice_set[0].detail_set.forEach((detail) => {
        total += parseFloat(detail.item.price);
      });
    }
    return total;
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  private format() {
    const formatted = {
      url: this.table.invoice_set.length !== 0 ? this.table.invoice_set[0].url : null,
      table: this.table.url,
      detail_set: [],
      state: 1
    };
    this.table.invoice_set[0].detail_set.forEach((detail) => {
      formatted.detail_set.push({
        id: detail.id ? detail.id : null,
        item: detail.item.id
      });
    });
    return formatted;
  }

  save() {
    if (this.table.invoice_set.length === 0) return;
    if (this.table.invoice_set[0].url) {
      this.api.invoiceUpdate(this.format()).subscribe((invoice) => {
        this.modalRef.close();
      });
    } else {
      this.api.invoiceNew(this.format()).subscribe((invoice) => {
        this.modalRef.close();
      });
    }
  }

  removeAttempt(index: number) {
    const detail_set = this.table.invoice_set[0].detail_set;
    if (!detail_set[index].state || detail_set[index].state === 'nuevo') {
      detail_set.splice(index, 1);
    }
  }
}
