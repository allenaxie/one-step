import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
import { ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  user: User | null = null;

  constructor(
    private navigationService: NavigationService,
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.themeService.setupTheme();
    this.navigationService.toggleNavigationbarVisibility(true);

    (globalThis as any).handleCredentialResponse = (response: any) => {
      this.authService.handleCredentialResponse(response);
    };
    // Subscribe to the active user observable
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;

      if (this.user?.email) {
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      }
    });
  }
}
