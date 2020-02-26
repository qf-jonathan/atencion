import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {DetailPreparation} from '../../../shared/services/api';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {
  preparationId: string;
  details: DetailPreparation[];

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.preparationId = params.get('id');
      this.api.preparation(this.preparationId).subscribe((data) => {
        this.details = data;
      });
    });
  }
}
