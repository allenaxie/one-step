import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.themeService.toggleTheme(Theme.dark);
  }

  onHandleEnter() {
    console.log('clicked enter button');
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
