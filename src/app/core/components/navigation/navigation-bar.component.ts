import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Theme, ThemeService } from 'src/app/modules/shared/theme.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  theme: Theme | null = Theme.light;
  constructor(
    private themeService: ThemeService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.themeService.setupTheme();
    this.themeService.theme.subscribe((theme) => {
      this.theme = theme;
    });
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
