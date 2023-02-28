import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  
  emitiEvento() {
    this.eventEmitter.emit("Clique no 3");
  }
}
