import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationService } from 'src/config/navigation.service';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FeaturesService } from './features.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [DashboardComponent, FeatureCardComponent],
  imports: [MatCardModule, MatButtonModule, CommonModule],
  providers: [NavigationService, FeaturesService],
  exports: [],
})
export class DashboardModule {}
