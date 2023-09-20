import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationBarComponent } from './components/navigation/navigation-bar.component';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  exports: [NavigationBarComponent],
})
export class CoreModule {}
