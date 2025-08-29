import { Component } from '@angular/core';
import { CardGC } from "../../components/card-g-c/card-g-c";
import { HeaderC } from "../../components/header-c/header-c";
import { GameService, TypeGame } from '../../services/games.service';
import { AuthService } from '../../services/auth.service';
import { CardPayGame } from "../../components/card-pay-game/card-pay-game";

@Component({
  selector: 'app-games-page',
  imports: [CardGC, HeaderC, CardPayGame],
  templateUrl: './games-page.html',
  styleUrl: './games-page.scss'
})
export class GamesPage {
  auth = new AuthService();
  name = '';
  gameService = new GameService();
  items: Array<TypeGame> = this.gameService.getAll();
  details:any = {};
  isClick = false;
  
  constructor() { 
    const data = this.auth.getSession();
    this.name = data.fname+" "+data.lname;
  }

  onClick(id:number){
    this.isClick = true;
    this.details = this.gameService.getById(id); 
  }
}
