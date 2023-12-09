import { NgModule } from '@angular/core';
import { ExpensesComponent } from './expenses/expenses.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [],
  exports: [],
})
export class ExpensesModule {}
