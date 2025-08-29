import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-card-g-c',
  imports: [],
  templateUrl: './card-g-c.html',
  styleUrl: './card-g-c.scss'
})
export class CardGC {
  id = input<number>();
  image = input<string>();
  title = input<string>();
  @Output() onClick = new EventEmitter<number>();

  clickItem(){
    this.onClick.emit(this.id());
  }
}
