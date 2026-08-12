import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  carrinhoService = inject(CarrinhoService);

  compraFinalizada = signal(false);

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2), nomeSemNumeros]),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  finalizar() {
    this.compraFinalizada.set(false);
    if (this.carrinhoService.carrinhoVazio()) {
      console.log('Não é possivel finalizar a compra com o carrinho vazio!');
      return;
    }

    if (this.formulario.invalid) {
      console.log('Formulário Inválido');
      this.formulario.markAllAsTouched();
      return;
    }

    const dados = this.formulario.value;
    const itens = this.carrinhoService.itens();
    const total = this.carrinhoService.totalItens();

    console.log('Compra finalizada com sucesso!');
    console.log('Dados do Formulário: ', dados);
    console.log('Itens no Carrinho: ', itens);
    console.log('Total de compras: ', total);

    this.carrinhoService.limpar();
    this.formulario.reset();
    this.compraFinalizada.set(true);
  }
}
function nomeSemNumeros(controle: AbstractControl): ValidationErrors | null {
  const valor = controle.value;
  if (!valor) return null;
  if (/\d/.test(valor)) {
    return { numeroInvalido: true };
  }
  return null;
}
