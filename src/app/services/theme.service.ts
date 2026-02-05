import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'thinkcube-theme';
  
  currentTheme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply theme changes to DOM
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    
    // Default to dark theme (current design)
    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme(): void {
    this.currentTheme.update(current => current === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }
}
