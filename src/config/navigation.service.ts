import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  isNavigationBarVisible = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleNavigationbarVisibility(): void {
    this.isNavigationBarVisible.next(!this.isNavigationBarVisible);
  }

  getNavigationBarVisibility() {
    return this.isNavigationBarVisible.getValue();
  }
}
