import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../config/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/config/icons';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/config/navigation.service';
import { AuthService } from 'src/config/auth.service';
import { environment } from '../environments/environment';

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
    private themeService: ThemeService,
    private cdref: ChangeDetectorRef,
    private authService: AuthService
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

    this.authService.signInGoogle.subscribe(() => {
      // Access secret variables
      const googleClientId = environment.googleOAuth.clientId;
      const googleClientSecret = environment.googleOAuth.clientSecret;
      console.log('sign in with google');
    });
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
