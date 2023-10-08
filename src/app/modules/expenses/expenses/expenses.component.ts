import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService, User } from 'src/config/auth.service';
import { NavigationService } from 'src/config/navigation.service';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExpensesComponent {
  user: User | null = null;
  features: string[] = [];
  pdfData: any = null;
  isFetching: boolean = false;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility(true);
    this.authService.getActiveUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }

  async handleExtractText() {
    this.isFetching = true;
    this.pdfData = await this.expensesService.extractPdfText();
    console.log('pdf data received:', this.pdfData);
    this.isFetching = false;
  }
}
