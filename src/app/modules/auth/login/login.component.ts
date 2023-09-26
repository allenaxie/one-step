import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private themeService: ThemeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.themeService.setupTheme();
    this.navigationService.toggleNavigationbarVisibility(true);
  }

  onGoogleSignIn(): void {
    this.authService.signInGoogle.emit();
  }
}
