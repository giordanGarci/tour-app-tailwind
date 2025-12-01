import { CanActivateFn, Router } from '@angular/router';
import { AuthGoogleService } from './authgoogle.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthGoogleService = inject(AuthGoogleService);
  const router: Router = inject(Router);

  if (authService.getLoggedProfile()) {
    console.log('User is logged in, access granted to route:', state.url);
    return true;
  }

  router.navigate(['/']);
  return false;
};
