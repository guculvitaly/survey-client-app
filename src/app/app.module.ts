import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import {HttpClientModule} from '@angular/common/http';
import { SurveyService } from './survey/survey.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './modal/modal.service';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyDetailsService } from './survey/survey.details.service';
import { ModalQuestionComponent } from './survey-details/modal-question/modal-question.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';




@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ModalComponent,
    SurveyDetailsComponent,
    ModalQuestionComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  ],
  providers: [SurveyService,ModalService,SurveyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
