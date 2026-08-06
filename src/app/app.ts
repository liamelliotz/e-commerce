import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { usuarioLogado, login, logout } from './core/auth';
import { MatButtonModule } from '@angular/material/button';
import { Header } from './shared/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('e-commerce');

  nomeLoja = 'Sunrise Store';
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}