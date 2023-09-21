import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './modules/shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setupTheme();
  }
}
