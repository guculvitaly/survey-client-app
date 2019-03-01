import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { AppComponent } from './app.component';
import { Survey } from './survey/survey';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
 
   { path: '', redirectTo: '/survey', pathMatch: 'full' },
  {path:'survey', component:SurveyComponent},
  {path:'survey/:id', component:SurveyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
