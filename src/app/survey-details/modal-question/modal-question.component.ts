import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Question } from 'src/app/question';
import { QuestionService } from './question.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.css']
})
export class ModalQuestionComponent implements OnInit {
  closeResult: string;

 public model:Question = new Question();

 

  formGroup: FormGroup;
  submitted = false;
  url : Utils = new Utils();
  constructor(private modalService: NgbModal, private service: QuestionService,private rout:ActivatedRoute,private _http: HttpClient) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      QuestionTittle: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
        
      ])
      
    });
      
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;' 
      ,'Accept':'*/*',
      'Access-Control-Allow-Origin': '*'
     
    })
  };

  //create new message to Survey
  public post()  {
    
    this.model.questionTittle = 'TITTLE';

    const id = this.rout.snapshot.paramMap.get('id');
    this.submitted = true;
    if(this.formGroup.invalid ) {
    
      return alert('Empty fields');
   } 
  
  
    this._http.post<any>(this.url.addNewQuestionToSurvey + id,this.model,this.httpOptions).subscribe((data:any)=>{
      console.log(data);
           
    });
    
    window.location.reload();
  }
}
