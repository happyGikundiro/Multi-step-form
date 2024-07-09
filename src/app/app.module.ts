import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalInfoFormComponent } from './components/forms/personal-info-form/personal-info-form.component';
import { SelectPlanFormComponent } from './components/forms/select-plan-form/select-plan-form.component';
import { AddOnFormComponent } from './components/forms/add-on-form/add-on-form.component';
import { SummaryFormComponent } from './components/forms/summary-form/summary-form.component';
import { FormsComponent } from './components/forms/forms.component';
import { NextBackButtonsComponent } from './components/next-back-buttons/next-back-buttons.component';
import { StepSidebarComponent } from './components/step-sidebar/step-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoFormComponent,
    SelectPlanFormComponent,
    AddOnFormComponent,
    SummaryFormComponent,
    FormsComponent,
    NextBackButtonsComponent,
    StepSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }