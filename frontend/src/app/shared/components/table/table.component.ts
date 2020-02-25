import {Component, Input, OnInit} from '@angular/core';
import {Table} from '../../services/api';
import {ApiService} from '../../services/api.service';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: Table;

  constructor(private api: ApiService, private scheduler: ScheduleService) {
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

  clearDirty() {
    if (this.table.invoice_set.length !== 0) {
      this.scheduler.stop();
      this.api.invoiceRemove(this.table.invoice_set[0]).subscribe(() => {
        this.scheduler.restart();
      });
    }
  }
}
