import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})

export class CarrinhoService {

//! Estado Global - Criado com Sucesso
private carrinho = signal<{nome: string; preco: number}[]>([]);

//? Seleções
itens = computed(() => this.carrinho());
quantidadeItens = computed(()=> this.carrinho().length);
totalItens = computed(() => 
this.carrinho().reduce((total, item) => total + item.preco,0));

// TODO: Ação Adicionar Produtos
adicionar(produto:{nome:string; preco:number}){
    this.carrinho.update(lista => [...lista, produto]);
}
// TODO: Ação de Limpeza
limpar() {
    this.carrinho.set([]);
}
}
