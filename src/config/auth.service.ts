import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() signInGoogle = new EventEmitter<any>();

  constructor() {}
}
