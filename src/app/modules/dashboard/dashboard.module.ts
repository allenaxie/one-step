import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationService } from 'src/config/navigation.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardComponent],
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule],
  providers: [NavigationService],
  exports: [],
})
export class DashboardModule {}
