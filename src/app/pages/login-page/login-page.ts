import { Component, signal } from '@angular/core';
import { HeaderC } from "../../components/header-c/header-c";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  imports: [HeaderC,FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  username = signal<string>('');
  password = signal<string>('');
  message = "";
  auth = new AuthService();

  constructor(private router: Router) {
    const isLogin = this.auth.isAuthenticated();
    if(isLogin){
      router.navigateByUrl('/');
      return 
    }
   }

  route(path: string) {
    this.router.navigateByUrl(path);
  }

  submitFrom() {
    const res = this.auth.login(this.username(),this.password())
    console.log(res)
    if(res.status==200){
      this.router.navigateByUrl('/');
    }
  }
}
