import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import {QuotesComponent} from './quotes/quotes.component';
import{CurrencyComponent} from './currency/currency.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
},
{
    path:'quotes',
    component:QuotesComponent
},
{
  path:'currency',
  component:CurrencyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
