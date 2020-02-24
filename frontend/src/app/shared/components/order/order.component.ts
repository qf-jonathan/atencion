import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Category} from '../../services/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  categories: Category[];
  currentTab: string;

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
}
