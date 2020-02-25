import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {Area, Table} from '../../../shared/services/api';
import {ScheduleService} from '../../../shared/services/schedule.service';

@Component({
  selector: 'app-ambience',
  templateUrl: './ambience.component.html',
  styleUrls: ['./ambience.component.scss']
})
export class AmbienceComponent implements OnInit {
  areaId: string;
  tableList: Table[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService,
              private scheduler: ScheduleService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.areaId = params.get('id');
      this.scheduler.register(this.provider.bind(this), (data) => {
        this.tableList = data.table_set;
      });
    });
  }

  async provider(): Promise<Area> {
    return await this.api.area(this.areaId).toPromise();
  }
}
