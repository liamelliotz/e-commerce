import { Injectable, computed, signal } from '@angular/core';

import { ItemCarrinho } from '../models/item-carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho = signal<ItemCarrinho[]>([]);

  itens = computed(() => this.carrinho().length);
  quantidade = computed(() => this.carrinho().length);
  total = computed(() => this.carrinho().reduce((total, item) => total + item.preco, 0));
  carrinhoVazio = computed(() => this.carrinho().length === 0);
  adicionar(produto: ItemCarrinho) {
    this.carrinho.update((listaAtual) => [...listaAtual, produto]);
  }

  removerPorIndice(indice: number) {
    this.carrinho.update((listaAtual) => listaAtual.filter((_, index) => index !== indice));
  }

  limpar() {
    this.carrinho.set([]);
  }
}
