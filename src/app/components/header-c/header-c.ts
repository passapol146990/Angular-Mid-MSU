import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-c',
  imports: [],
  templateUrl: './header-c.html',
  styleUrl: './header-c.scss'
})
export class HeaderC {
  auth = new AuthService();
  isLogin = this.auth.isAuthenticated();
  constructor(private router:Router){}

  route(path:string){
    this.router.navigateByUrl(path);
  }
}
