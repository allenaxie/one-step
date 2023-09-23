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
  theme = new BehaviorSubject<Theme>(Theme.dark);

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

  toggleTheme(value?: Theme): void {
    const currentTheme = this.theme.getValue();
    const bodyClassList = document.body.classList;
    // if a value is passed as argument, use it
    if (value) {
      // set app theme
      this.theme.next(value);
      // remove existing theme from body el
      if (bodyClassList.contains(Theme.dark)) {
        bodyClassList.remove(Theme.dark);
      }
      if (bodyClassList.contains(Theme.light)) {
        bodyClassList.remove(Theme.light);
      }
      // add updated theme to body el
      bodyClassList.add(value);
      // add updated theme to local storage
      localStorage.setItem('theme', value);
    } else {
      if (currentTheme === Theme.light) {
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
  }
}
