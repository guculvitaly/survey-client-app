import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private _http: HttpClient) { }
  url : Utils = new Utils();
  

  public getAllUSers(){
   
    return this._http.get<any>(this.url.getAllSurveyList);
       
 }

}
