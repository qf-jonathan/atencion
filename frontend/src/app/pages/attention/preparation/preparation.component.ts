import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {DetailPreparation} from '../../../shared/services/api';
import {ScheduleService} from '../../../shared/services/schedule.service';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {
  preparationId: string;
  details: DetailPreparation[];

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private scheduler: ScheduleService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.preparationId = params.get('id');
      this.scheduler.register(this.provider.bind(this), (data) => {
        this.details = data;
      });
    });
  }

  async provider() {
    return this.api.preparation(this.preparationId).toPromise();
  }

  changeState(detail: DetailPreparation) {
    if (detail.state !== 'listo') {
      this.scheduler.stop();
      this.api.detailUpdate(detail).subscribe((e) => {
        this.scheduler.restart();
      });
    }
  }
}
