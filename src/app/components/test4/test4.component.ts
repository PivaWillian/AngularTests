import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {
  @Output() eventoFour: EventEmitter<any> = new EventEmitter<any>();
  emitirEvento() {
    this.eventoFour.emit("clique no componente quatro")
  }
}
