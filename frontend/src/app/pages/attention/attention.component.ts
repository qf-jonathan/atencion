import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private api: ApiService) {
    this.api.profile().subscribe((d) => {
      console.log(d);
    });
  }

  ngOnInit(): void {
  }

  closeSession() {
    this.auth.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigateByUrl('/login').then();
    });
  }
}
