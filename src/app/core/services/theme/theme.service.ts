import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  private readonly THEME_KEY = 'isLightTheme';

  isLightTheme(): boolean {
    const storedTheme = window.localStorage.getItem(this.THEME_KEY);
    if (storedTheme) {
      return storedTheme === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }

  setTheme(isLightTheme: boolean) {
    window.localStorage.setItem(this.THEME_KEY, `${isLightTheme}`);
    const theme = isLightTheme ? 'light-theme' : 'dark-theme';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
  }
}
