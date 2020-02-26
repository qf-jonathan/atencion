import {Component, Input, OnInit} from '@angular/core';
import {DetailPreparation} from '../../services/api';

@Component({
  selector: 'app-preparation-item',
  templateUrl: './preparation-item.component.html',
  styleUrls: ['./preparation-item.component.scss']
})
export class PreparationItemComponent implements OnInit {
  @Input() detail: DetailPreparation;

  constructor() {
  }

  ngOnInit(): void {
  }
}
