import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

/* materialize imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';
/* ---------------------------*/

/* flex layout module imports */
 import { FlexLayoutModule } from '@angular/flex-layout';
/* ---------------------------*/

import { AppComponent } from './app.component';
import { LoginComponent } from '././components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const navigationRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      navigationRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PizzaPartyAppModule { }
