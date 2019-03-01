import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Utils } from '../utils';
@Injectable({
    providedIn: 'root'
  })
  
  export class SurveyDetailsService {

    url : Utils = new Utils;

    constructor(private _http: HttpClient) { }

      
 getSurveyById(id: Object) {
   
    //const _url = `survey/'${id}`;
    const _url = this.url.getSingleSurvey + id;
    return this._http.get<any>(_url).pipe(
    
    );
  }

  getListQuestions(id:Object){
     
     // const  _url = 'http://surveywebapi.azurewebsites.net/api/question/survey/';
     const url = 'https://localhost:44330//api/question/survey/';
      return this._http.get<any>(url + id)
        .pipe(
                catchError(err => {
                  
                    throw 'error in source. Details: ' + err;
          }),
       );
  }


  }