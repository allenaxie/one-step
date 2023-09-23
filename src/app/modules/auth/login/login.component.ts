import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/config/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility();
  }
}
