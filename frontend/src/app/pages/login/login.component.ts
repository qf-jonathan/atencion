import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  evento(event): void {
    event.preventDefault();
    this.auth.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data['token']);
    }, (error) => {
      localStorage.clear();
    });
  }
}
