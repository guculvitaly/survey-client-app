import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Survey } from '../survey/survey';
import { Observable } from 'rxjs';
import { Utils } from '../utils';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
export class ModalService implements OnInit{

    constructor(private _http: HttpClient) { }

private url = 'https://localhost:44330/api/survey/survey';
_url : Utils = new Utils();

ngOnInit(){
    
} 
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;' 
    ,'Accept':'*/*',
    'Access-Control-Allow-Origin': '*'
   
  })
};

 /** POST: add a new survey to the database */
 public createSurvey (hero: Survey): Observable<Survey> {
    return this._http.post<any>(this._url.createSurvey, hero,this.httpOptions)
    .pipe(
      catchError(err => {
         
           throw 'error in source. Details: ' + err;
 }),
);
  }


}