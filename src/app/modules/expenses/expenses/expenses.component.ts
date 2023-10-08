import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExpensesComponent {
  user: User | null = null;
  features: string[] = [];

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility(true);
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }
}
