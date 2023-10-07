import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from './components/navigation/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from 'src/config/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatTooltipModule,
    RouterModule,
  ],
  providers: [AuthService],
  exports: [NavigationBarComponent],
})
export class CoreModule {}
