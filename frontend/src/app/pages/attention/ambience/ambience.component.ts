import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {Table} from '../../../shared/services/api';
import {ModalComponent} from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-ambience',
  templateUrl: './ambience.component.html',
  styleUrls: ['./ambience.component.scss']
})
export class AmbienceComponent implements OnInit {
  areaId: string;
  tableList: Table[];

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.areaId = params.get('id');
      this.api.area(this.areaId).subscribe((data) => {
        this.tableList = data.table_set;
      });
    });
  }
}
