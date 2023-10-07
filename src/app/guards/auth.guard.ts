import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { AuthService, User } from 'src/config/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  ngZone: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getActiveUser().pipe(
      take(1), // Take one emission and unsubscribe
      map((user: User | null) => {
        if (user !== null) {
          return true; // User is logged in
        } else {
          // Redirect to login page if user is not logged in
          this.router.navigate(['login'], { relativeTo: this.route });
          return false;
        }
      })
    );
  }
}
