import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'Fone Gamer', preco:345.99},
    {nome: 'Teclado Gamer Arceus', preco: 456.99},
    {nome: 'RTX 5090', preco: 25999.99}
  ];
  exibirProduto(nome: string){
    console.log('Produto Selecionado: ', nome);
  }
}
