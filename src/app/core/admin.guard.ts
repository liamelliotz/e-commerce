import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.usuarioLogado()) {
    return router.createUrlTree(['/login']);
  }

  if (!authService.admin()) {
    return router.createUrlTree(['/acesso-negado']);
  }

  return true;
};
