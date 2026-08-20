import { Injectable, inject } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { ItemCarrinho } from '../models/item-carrinho';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoFacade {
  // A facade continua sendo a camada usada pelos componentes.
  // Os componentes não precisam conhecer os detalhes internos do CarrinhoService.
  private carrinhoService = inject(CarrinhoService);
  // Aula 32: sinais públicos de leitura usados pelo header, carrinho e checkout.
  itens = this.carrinhoService.itens;
  quantidade = this.carrinhoService.quantidade;
  total = this.carrinhoService.total;
  carrinhoVazio = this.carrinhoService.carrinhoVazio;
  // Ação de alto nível para adicionar produto.
  adicionarProduto(produto: ItemCarrinho) {
    this.carrinhoService.adicionar(produto);
  }
  // Ação de alto nível para remover item.
  removerItem(indice: number) {
    this.carrinhoService.removerPorIndice(indice);
  }
  // Ação de alto nível para limpar o carrinho.
  limparCarrinho() {
    this.carrinhoService.limpar();
  }
}
