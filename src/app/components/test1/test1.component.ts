import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  listaDesenhos: any = [
    { nome: 'Naruto', episodios: 700, rating: 9.5 },
    { nome: 'Bleach', episodios: 600, rating: 8.0 },
    { nome: 'CDZ', episodios: 560, rating: 10.0 }
  ]

  recebeEvento(event: any) {
    console.log('Evento4 recebido ' + event);
  }

  recebeEventoMelhorado(event: any) {
    console.log(event + ' Recebeu terceiro');
  }
}
