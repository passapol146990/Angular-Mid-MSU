import { Component, OnInit } from '@angular/core';
import { HeaderC } from "../../components/header-c/header-c";
import { GameService, TypeGame } from '../../services/games.service';
import { CardGC } from '../../components/card-g-c/card-g-c';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HeaderC, CardGC],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
  gameService = new GameService();
  auth = new AuthService();
  items: Array<TypeGame> = this.gameService.getAll();

  constructor(private router:Router) { }

  ngOnInit(): void {
    // const token = this.auth.isAuthenticated();
    // if (token) {
    //   this.router.navigate(['/member/profile']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

}
