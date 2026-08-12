import { Injectable, signal, computed } from '@angular/core';

type ItemCarrinho = {
  nome: string;
  preco: number;
};

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // Estado global do carrinho
  private carrinho = signal<ItemCarrinho[]>([]);

  // Seleções
  itens = computed(() => this.carrinho());
  quantidadeItens = computed(() => this.carrinho().length);

  totalItens = computed(() => this.carrinho().reduce((total, item) => total + item.preco, 0));

  carrinhoVazio = computed(() => this.carrinho().length === 0);

  // Adicionar produto
  adicionar(produto: ItemCarrinho) {
    this.carrinho.update((lista) => [...lista, produto]);
  }

  // Limpar carrinho
  limpar() {
    this.carrinho.set([]);
  }
}
