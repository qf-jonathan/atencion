import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {Table} from '../../../shared/services/api';
import {ScheduleService} from "../../../shared/services/schedule.service";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-ambience',
  templateUrl: './ambience.component.html',
  styleUrls: ['./ambience.component.scss']
})
export class AmbienceComponent implements OnInit {
  areaId: string;
  tableList: Table[];
  scheduleSubscribed: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService,
              private schedule: ScheduleService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.areaId = params.get('id');
      this.api.area(this.areaId).subscribe((data) => {
        this.tableList = data.table_set;
        this.schedule.initScheduler();
      });
    });
    this.scheduleSubscribed = this.schedule.getSubscriber().subscribe(() => {
      this.api.area(this.areaId).subscribe((data) => {
        this.tableList = data.table_set;
      });
    });
    /*this.router.events.subscribe(() => {

    });*/
    /*this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.scheduleSubscribed.unsubscribe();
    });*/
  }
}
