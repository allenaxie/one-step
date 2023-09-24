import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  Dark = 'dark-theme',
  Light = 'light-theme',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = new BehaviorSubject<Theme>(Theme.Dark); // Initialize with a default theme

  constructor() {
    this.setupTheme();
  }

  /**
   * Method to set up theme
   */
  setupTheme(): void {
    // Check if the user has a theme in local storage
    const localStorageTheme: string | null = localStorage.getItem('theme');

    if (localStorageTheme) {
      // If a theme is found in local storage, convert it to a Theme enum
      const parsedTheme: Theme | null = this.parseTheme(localStorageTheme);
      if (parsedTheme) {
        this.theme.next(parsedTheme);
      }
    }

    // Add theme to the body element
    const bodyClassList = document.body.classList;
    bodyClassList.add(this.theme.getValue());

    // Save theme in local storage
    localStorage.setItem('theme', this.theme.getValue());
  }

  /**
   * Method to toggle between light and dark themes
   */
  toggleTheme(): void {
    const currentTheme = this.theme.getValue();
    const newTheme = currentTheme === Theme.Dark ? Theme.Light : Theme.Dark;
    this.theme.next(newTheme);
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  /**
   * Helper method to parse a string into a Theme enum
   * @param themeString - theme as string type
   * @returns theme as Theme enum
   */
  private parseTheme(themeString: string): Theme | null {
    switch (themeString) {
      case Theme.Dark:
      case Theme.Light:
        return themeString as Theme;
      default:
        return null; // Invalid theme string
    }
  }
}
