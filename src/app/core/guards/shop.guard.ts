import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class ShopGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Primero comprobar que existe sesión
    if (this.auth.getSession() !== null) {
      console.log('Estamos logueados');
      const dataDecode: { exp: number } = this.decodeToken();
      // COmprobar que no está caducado el token
      if (dataDecode.exp < new Date().getTime() / 1000) {
        console.log('Sesión caducada');
        return this.redirect();
      }
      return true;
    }
    console.log('Sesion no iniciada');
    return this.redirect();
  }
  redirect() {
    this.router.navigate(['/login']);
    return false;
  }
  decodeToken(): { exp: number } {
    return jwtDecode(this.auth.getSession().token);
  }
}
