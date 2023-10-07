import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../config/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/config/icons';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/config/navigation.service';
import { AuthService } from 'src/config/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isNavbarVisible!: boolean;
  private navbarSub!: Subscription;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private navigationService: NavigationService,
    private cdref: ChangeDetectorRef
  ) {
    this.setupIcons();
  }

  ngOnInit(): void {
    this.navbarSub = this.navigationService.isNavigationBarVisible.subscribe(
      (value) => {
        this.isNavbarVisible = value;
        this.cdref.detectChanges();
      }
    );
  }

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
