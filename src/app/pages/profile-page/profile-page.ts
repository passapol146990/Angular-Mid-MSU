import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HeaderC } from "../../components/header-c/header-c";

@Component({
  selector: 'app-profile-page',
  imports: [HeaderC],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss'
})
export class ProfilePage {
  auth = new AuthService();
  fullname = '';
  email = '';
  role = '';
  constructor(){
    const data:any = this.auth.getSession();

    this.fullname = data.fname +" "+ data.lname;
    this.email = data.username;
    this.role = data.role;
  }

}
