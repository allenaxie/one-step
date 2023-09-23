import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/config/theme.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [MatIconModule],
  providers: [ThemeService],
  exports: [HomeComponent],
})
export class HomeModule {}
