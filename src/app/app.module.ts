import { RemindersDataService } from './service/reminders-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

/* Angular Material imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule, MdMenuModule, MdSidenavModule, MdIconModule } from '@angular/material';
import { MdToolbarModule, MdDialogModule } from '@angular/material';
/* ---------------------------*/

/* flex layout module imports */
 import { FlexLayoutModule } from '@angular/flex-layout';
/* ---------------------------*/

import { AppComponent } from './app.component';
import { LoginComponent } from '././components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RevisionComponent } from './components/revision/revision.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ReminderMainComponent } from './components/reminder-main/reminder-main.component';
import { ReminderDialogComponent } from './dialog/reminder-dialog/reminder-dialog.component';


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
    path: 'reminder-main',
    component: ReminderMainComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    RevisionComponent,
    ReminderComponent,
    ReminderMainComponent,
    ReminderDialogComponent
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
    MdToolbarModule,
    MdDialogModule
  ],
  entryComponents: [
    ReminderDialogComponent
  ],
  providers: [RemindersDataService],
  bootstrap: [AppComponent]
})
export class PizzaPartyAppModule { }
