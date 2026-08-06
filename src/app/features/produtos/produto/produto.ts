// Importa recursos do Angular.

// Component -> usado para criar um componente.
// Input -> permite receber dados de outro componente (pai).
// Output -> permite enviar dados para outro componente (pai).
// EventEmitter -> usado para emitir eventos do componente filho para o pai.
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Importa Pipes nativos do Angular.
// UpperCasePipe -> transforma textos em letras maiúsculas.
// CurrencyPipe -> transforma números em formato de moeda.
// (Neste código ele foi importado, mas não está sendo utilizado.)
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
// Importa um Pipe personalizado criado na aplicação.
// Ele é usado para formatar preços.
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

import { MatButtonModule } from '@angular/material/button';
// Importa o módulo de botões do Angular Material,
// permitindo utilizar componentes como <button mat-button>,
// <button mat-raised-button>, <button mat-icon-button>, entre outros.

import { MatCardModule } from '@angular/material/card';
// Importa o módulo de cartões do Angular Material,
// permitindo utilizar componentes como <mat-card> para
// organizar e exibir informações em formato de cartão.

@Component({
  // Nome da tag que representa esse componente no HTML.

  // Exemplo de uso:
  // <app-produto></app-produto>
  selector: 'app-produto',

  // Lista de recursos utilizados dentro do HTML.

  // UpperCasePipe:
  // permite usar | uppercase no template.

  // PrecoFormatadoPipe:
  // permite usar | precoFormatado no template.
  imports: [UpperCasePipe, PrecoFormatadoPipe, MatButtonModule, MatCardModule],

  // Arquivo HTML ligado ao componente.
  templateUrl: './produto.html',

  // Arquivo CSS responsável pelo estilo.
  styleUrl: './produto.css',
})

// Classe principal do componente Produto.
export class Produto {
  //==================================================
  // INPUTS - ENTRADA DE DADOS
  //==================================================

  // @Input permite que o componente pai envie informações
  // para este componente.

  // Exemplo:

  // Componente pai:
  //
  // <app-produto
  //    [nome]="item.nome"
  // >
  // </app-produto>

  // Recebe o nome do produto.

  // Valor inicial:
  // string vazia.
  @Input()
  nome: string = '';

  // Recebe o preço do produto.

  // Valor inicial:
  // 0.
  @Input()
  preco: number = 0;

  //==================================================
  // OUTPUT - SAÍDA DE DADOS
  //==================================================

  // @Output permite enviar informações
  // do componente filho para o componente pai.

  // EventEmitter cria um evento personalizado.

  // Neste caso:
  // quando um produto for selecionado,
  // envia o nome dele para o componente pai.
  @Output()
  produtoSelecionado = new EventEmitter<string>();

  //==================================================
  // MÉTODO DE SELEÇÃO DO PRODUTO
  //==================================================

  // Método chamado pelo botão no HTML:

  // <button (click)="selecionarProduto()">

  selecionarProduto() {
    // Emite um evento para o componente pai.

    // Envia o nome do produto selecionado.

    // Exemplo:

    // Usuário seleciona:
    // "Mouse"

    // O evento envia:
    // "Mouse"
    this.produtoSelecionado.emit(this.nome);
  }
  @Output() produtoAdicionado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({
      nome:this.nome,
      preco:this.preco,
    });
}
}
