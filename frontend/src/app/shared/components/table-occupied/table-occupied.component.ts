import {Component, OnInit} from '@angular/core';

const SIZE_STYLES = {
  default: {
    width: '40px',
    height: '40px',
    margin: '16px 7px 0 7px'
  },
  medium: {
    width: '30px',
    height: '30px',
    margin: '10px 6px 0 6px'
  },
  small: {
    width: '20px',
    height: '20px',
    margin: '4px 2px 0 2px'
  }
};

@Component({
  selector: 'app-table-occupied',
  templateUrl: './table-occupied.component.html',
  styleUrls: ['./table-occupied.component.scss']
})
export class TableOccupiedComponent implements OnInit {
  size = 8;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStyle() {
    if (this.size <= 8) {
      return SIZE_STYLES.default;
    } else if (this.size <= 15) {
      return SIZE_STYLES.medium;
    }
    return SIZE_STYLES.small;
  }
}
