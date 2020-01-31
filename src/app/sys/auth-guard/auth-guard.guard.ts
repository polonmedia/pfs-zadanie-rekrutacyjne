import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (route.path === 'features' || 'currencies') {
      if (!!sessionStorage.getItem('sessionLogin')) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
    } else if (route.path === 'login') {
      if (!!sessionStorage.getItem('sessionLogin')) {
        this.router.navigateByUrl('/features');
        return false;
      } else {
        return true;
      }
    }
  }
}
