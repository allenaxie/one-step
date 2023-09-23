import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isNavigationBarVisible = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleNavigationbarVisibility(value?: boolean): void {
    // if a value is passed as argument, use it
    if (value) {
      this.isNavigationBarVisible.next(value);
    } else {
      this.isNavigationBarVisible.next(!this.isNavigationBarVisible);
    }
  }

  getNavigationBarVisibility() {
    return this.isNavigationBarVisible.getValue();
  }
}
