import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout-page',
  imports: [],
  templateUrl: './logout-page.html',
  styleUrl: './logout-page.scss'
})
export class LogoutPage {
  auth = new AuthService();
  constructor(private router:Router){
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
