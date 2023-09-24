import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NavigationService } from 'src/config/navigation.service';
import { Theme, ThemeService } from 'src/config/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None, // used to access theme of body el
})
export class HomeComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigationService.toggleNavigationbarVisibility(false);
  }

  onHandleEnter() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
