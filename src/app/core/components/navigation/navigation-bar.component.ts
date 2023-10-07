import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, User } from 'src/config/auth.service';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None, // used to access theme of body el
})
export class NavigationBarComponent implements OnInit {
  theme: Theme | null = Theme.Dark;
  user: User | null = null;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme) => {
      this.theme = theme;
    });
    // Subscribe to the active user observable
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }

  dashboardClick() {
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  signOut() {
    this.authService.signOut();
  }
}
