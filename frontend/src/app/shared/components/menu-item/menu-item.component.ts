import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../services/api";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit(): void {
  }
}
