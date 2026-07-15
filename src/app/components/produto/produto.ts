import { Component,Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common'; // Adiciona o Currency 
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adiocionando a classe Produto com as propiedadades produto.
export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;
}