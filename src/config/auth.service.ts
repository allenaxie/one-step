import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
  jti: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private activeUserSubject = new BehaviorSubject<User | null>(null);
  constructor(private router: Router, private route: ActivatedRoute) {
    // Check local storage and update the BehaviorSubject on service initialization
    const localStorageUser: string | null = localStorage.getItem('user');
    if (localStorageUser) {
      this.activeUserSubject.next(JSON.parse(localStorageUser) as User);
    }
  }

  // Expose an observable for components to subscribe to
  getActiveUser(): Observable<User | null> {
    return this.activeUserSubject.asObservable();
  }

  // Method to update the active user
  setActiveUser(user: User | null): void {
    this.activeUserSubject.next(user);
    // Update local storage as well
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  signOut() {
    try {
      localStorage.removeItem('user');
      this.setActiveUser(null);
      this.router.navigate(['/login']);
    } catch (err) {
      console.log(err);
    }
  }

  decodeJwtResponse(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  handleCredentialResponse(res: any): any {
    const resPayload = this.decodeJwtResponse(res.credential);
    if (resPayload.email) {
      this.setActiveUser(resPayload);
    }
    return resPayload;
  }
}
