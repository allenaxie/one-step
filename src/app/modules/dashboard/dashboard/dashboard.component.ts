import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    console.log('dashboard');
    this.navigationService.toggleNavigationbarVisibility(true);
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }
}
