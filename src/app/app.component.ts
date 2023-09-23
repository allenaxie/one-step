import { Component, OnDestroy, OnInit } from '@angular/core';
import { Theme, ThemeService } from '../config/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/config/icons';
import { BehaviorSubject, Subject, Subscription, takeUntil } from 'rxjs';
import { NavigationService } from 'src/config/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isNavbarVisible: boolean = false;
  navbarSub: Subscription;
  theme: Theme | null = Theme.dark;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private navigationService: NavigationService,
    private themeService: ThemeService
  ) {
    this.themeService.setupTheme();
    this.setupIcons();
    this.navbarSub = this.navigationService.isNavigationBarVisible.subscribe(
      (value) => {
        this.isNavbarVisible = value;
      }
    );
  }

  ngOnInit(): void {}

  setupIcons(): void {
    for (const iconName in ICONS) {
      if (ICONS.hasOwnProperty(iconName)) {
        this.iconRegistry.addSvgIcon(
          iconName,
          this.sanitizer.bypassSecurityTrustResourceUrl(ICONS[iconName])
        );
      }
    }
  }

  ngOnDestroy(): void {
    this.navbarSub.unsubscribe();
  }
}
