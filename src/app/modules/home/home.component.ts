import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None, // used to access theme of body el
})
export class HomeComponent implements OnInit {
  user: User | null = null;
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility(false);
    // Subscribe to the active user observable
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }

  onHandleEnter() {
    if (this.user) {
      this.router.navigate(['dashboard'], { relativeTo: this.route });
    } else {
      this.router.navigate(['login'], { relativeTo: this.route });
    }
  }
}
