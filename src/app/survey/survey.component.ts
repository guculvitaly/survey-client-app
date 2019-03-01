import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';
import { Survey } from './survey';
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

 
  private list : Survey[]= [
    
  ];
 

  constructor(private _surveyService: SurveyService) {
    
   }

  ngOnInit() {
   this._surveyService.getAllUSers().subscribe((data :any[]) => {
     this.list = data;
     console.log(data);
   
   });
   
    }

   

}
