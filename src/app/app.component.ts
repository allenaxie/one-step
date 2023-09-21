import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './modules/shared/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/config/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.setupIcons();
  }

  ngOnInit(): void {}

  setupIcons(): void {
    for (const iconName in ICONS) {
      if (ICONS.hasOwnProperty(iconName)) {
        this.iconRegistry.addSvgIcon(
          iconName,
          this.sanitizer.bypassSecurityTrustResourceUrl(ICONS[iconName])
        );
      }
    }
  }
}
