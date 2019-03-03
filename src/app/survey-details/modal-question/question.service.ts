import { OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'src/app/question';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utils } from 'src/app/utils';
import { ModalQuestionComponent } from './modal-question.component';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class QuestionService implements OnInit{
    constructor(private _http: HttpClient) { }

    ngOnInit(){
    
    }

  
}

