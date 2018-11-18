import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Custom Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgBusyModule} from 'ng-busy';

// Components or Services
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuotesComponent } from './quotes/quotes.component';
import {SharedService} from './shared.service';
import 'rxjs/add/observable/of';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    QuotesComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
