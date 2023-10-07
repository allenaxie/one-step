import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationService } from 'src/config/navigation.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [],
  providers: [NavigationService],
  exports: [],
})
export class DashboardModule {}
