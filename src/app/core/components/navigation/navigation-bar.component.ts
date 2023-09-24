import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None, // used to access theme of body el
})
export class NavigationBarComponent implements OnInit {
  theme: Theme | null = Theme.Dark;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme) => {
      this.theme = theme;
    });
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
