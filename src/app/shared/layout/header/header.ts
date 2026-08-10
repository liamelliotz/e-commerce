import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatAnchor, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Mercado Liso';
  private carrinhoService = inject(CarrinhoService);
  quantidadeHeader = this.carrinhoService.quantidadeItens;
}
