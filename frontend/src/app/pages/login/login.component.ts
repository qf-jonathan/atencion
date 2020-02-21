import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

const DEFAULT_MSG = 'Ingresar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message = DEFAULT_MSG;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  evento(event): void {
    event.preventDefault();
    this.auth.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data['token']);
      this.router.navigateByUrl('/');
    }, (error) => {
      localStorage.clear();
      this.message = 'Usuario y/o contraseña inválidos';
      setTimeout(() => {
        this.message = DEFAULT_MSG;
      }, 3000);
    });
  }

  getAlert(): boolean {
    return this.message !== DEFAULT_MSG;
  }
}
