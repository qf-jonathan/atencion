import {Component, Input, OnInit} from '@angular/core';
import {Table} from '../../services/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  constructor() {
  }

  ngOnInit(): void {
  }

  getState(): string {
    if (this.table.invoice_set.length !== 0) {
      const notDelivered = this.table.invoice_set[0].detail_set.some((detail) => {
        return detail.state !== 'entregado';
      });
      return notDelivered ? 'occupied' : 'dirty';
    }
    return 'free';
  }

  openOrderDialog() {
    alert('hola');
  }
}
