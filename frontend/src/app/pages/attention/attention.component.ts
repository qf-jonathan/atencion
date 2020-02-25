import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {NavTab} from "../../shared/services/api";
import {ScheduleService} from '../../shared/services/schedule.service';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {
  tabs: NavTab[];

  constructor(private auth: AuthService,
              private route: ActivatedRoute,
              private scheduler: ScheduleService,
              private router: Router,
              private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.navTabs().subscribe((navTabs) => {
      this.tabs = navTabs;
      if (this.tabs.length !== 0 && this.route.children.length === 0) {
        this.loadUI(this.tabs[0]);
      }
    });
  }

  closeSession() {
    this.scheduler.stop();
    this.auth.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigateByUrl('/login').then();
    });
  }

  loadUI(nav: NavTab) {
    let url = '';
    if (nav.type === 'Mozo') {
      url = 'ambience';
    } else if (nav.type === 'Cocinero') {
      url = 'preparation';
    }
    this.router.navigate([url, nav.id]).then();
  }
}
