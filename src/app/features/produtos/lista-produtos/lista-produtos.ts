import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import {signal} from '@angular/core';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe'

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
//!lista com dados - Array
  produtos = signal([
    {nome: 'Fone Gamer', preco:345.99},
    {nome: 'Teclado Gamer Arceus', preco: 456.99},
    {nome: 'RTX 5090', preco: 25999.99}
  ]);
//!função para exibir produtos selecionados pelo usuário no console 
  exibirProduto(nome: string){
    console.log('Produto Selecionado: ', nome);
  }
//!funcão que adiciona produtos usando metodo update()
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual,
      {nome:'Playstation 5', preco:3000},
    ]);
  }
//!função que contabiliza a quantidade de produtos na lista com o metodo computed()
  totalProdutos = computed(() => this.produtos().length);
//!funcao que calcula o valor total do produtos usando o metodo computed()
  valorTotal = computed(() =>
  {return this.produtos().reduce((total, item) =>
  total + item.preco, 0)});
  //!função para substituir a lista atual usando o metodo set()
substituirProdutos(){
  this.produtos.set([
    { nome:'Teclado', preco:50 },
    { nome:'Mouse', preco:15 },
    { nome:'Monitor', preco:500 },
    { nome:'Desktop', preco:1500 },
    { nome:'Headset', preco:30 },
  ]);
 }
}
