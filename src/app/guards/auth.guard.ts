import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.getIsAuthenticated()()) {
        return true;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }
};