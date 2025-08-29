import { Component, input, signal } from '@angular/core';
import { CardGC } from "../card-g-c/card-g-c";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-pay-game',
  imports: [FormsModule],
  templateUrl: './card-pay-game.html',
  styleUrl: './card-pay-game.scss'
})
export class CardPayGame {
  name = input<string>(''); 
  image = input<string>(''); 
  title = input<string>('');
  ID = signal<string>('');
  money = signal<string>('');

  constructor(){}
  submit(){
    alert(`ทำรายการเติมเกม ${this.name()} สำหรับผู้ใช้ ID ${this.ID()} จำนวน ${this.money()} บาทสำเร็จ!`)
  }
}
