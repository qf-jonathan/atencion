import {Component, Input, OnInit} from '@angular/core';
import {Detail} from '../../services/api';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() detail: Detail;

  constructor() {
  }

  ngOnInit(): void {
  }
}
