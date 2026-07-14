import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adiocionando a classe Produto com as propiedadades produto.
export class Produto {
  produto = 'Notebook Gamer';
  preco = 5000; // igual a preço
  mostrarProduto = true;
  mostrarPreco = true;
produtos = [
  {nome:'Teclado', preco:49.99},
  {nome:'Mouse', preco:29.99},
  {nome:'Monitor', preco:149.99} 
];
} //aumenta classe de produtos
