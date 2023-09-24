import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/config/navigation.service';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.setupTheme();
    this.navigationService.toggleNavigationbarVisibility(true);
  }
}
