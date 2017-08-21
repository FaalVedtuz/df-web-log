import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

/* Angular Material imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule, MdMenuModule, MdSidenavModule, MdIconModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
/* ---------------------------*/

/* flex layout module imports */
 import { FlexLayoutModule } from '@angular/flex-layout';
/* ---------------------------*/

import { AppComponent } from './app.component';
import { LoginComponent } from '././components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RevisionComponent } from './components/revision/revision.component';


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
    DashboardComponent,
    RevisionComponent
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
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PizzaPartyAppModule { }
