import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None, // used to access theme of body el
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme(Theme.dark);
  }
}
