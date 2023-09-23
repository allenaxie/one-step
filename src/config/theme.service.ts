import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, takeUntil } from 'rxjs';

export enum Theme {
  light = 'light-theme',
  dark = 'dark-theme',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = new BehaviorSubject<Theme>(Theme.light);

  setupTheme(): void {
    // if user has theme in local storage, use it
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === Theme.dark) {
      this.theme.next(localStorageTheme);
    }

    // add theme to body element
    const bodyClassList = document.body.classList;
    bodyClassList.add(this.theme.getValue());
    // save theme in local storage
    localStorage.setItem('theme', this.theme.getValue());
  }

  toggleTheme(): void {
    const theme = this.theme.getValue();
    const bodyClassList = document.body.classList;

    if (theme === Theme.light) {
      // set to dark theme
      this.theme.next(Theme.dark);
      bodyClassList.add(Theme.dark);
      bodyClassList.remove(Theme.light);
      localStorage.setItem('theme', Theme.dark);
    } else {
      // set to light theme
      this.theme.next(Theme.light);
      bodyClassList.add(Theme.light);
      bodyClassList.remove(Theme.dark);
      localStorage.setItem('theme', Theme.light);
    }
  }

  setTheme(theme: Theme): void {
    const bodyClassList = document.body.classList;
    // set app theme
    this.theme.next(theme);
    // remove existing theme from body el
    if (bodyClassList.contains(Theme.dark)) {
      bodyClassList.remove(Theme.dark);
    }
    if (bodyClassList.contains(Theme.light)) {
      bodyClassList.remove(Theme.light);
    }
    // add updated theme to body el
    bodyClassList.add(theme);
    // add updated theme to local storage
    localStorage.setItem('theme', theme);
  }
}
