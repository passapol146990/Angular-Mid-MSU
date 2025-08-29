import { Injectable } from '@angular/core';
import gameData from '../../assets/data/games.json';

export interface TypeGame{
  id:number,
  name:string,
  image:string,
  details:string
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  item = new Map<number,TypeGame>();
  constructor(){
    gameData.forEach(e => {
      this.item.set(e.id,e);
    });
  }

  getAll(){
    return gameData;
  }
  getById(id:number){
    return this.item.get(id);
  }
}
