import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class NavigationBarComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
