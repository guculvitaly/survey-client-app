import { Component, OnInit } from '@angular/core';
import { SurveyDetailsService } from '../survey/survey.details.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Survey } from '../survey/survey';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal/modal.service';
import { Question } from '../question';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit  {

  closeResult: string;
  e : Object;
  model : Survey= new Survey();
  question : Question = new Question();
  
  id : Navigation;

  list: Survey[];
  
  private questionList: Question[] [

  ];

  constructor(private _serv : SurveyDetailsService, private router:Router,
              private rout:ActivatedRoute, 
              private modalService: NgbModal, private mservice : ModalService) { 
                
    router.events.subscribe((url:any) => console.log(url));
      console.log(router.url);  // to print only path eg:"/login"
      this.e = router.url;
  }

  ngOnInit() {
    const id = this.rout.snapshot.paramMap.get('id');
    this._serv.getSurveyById(this.e).subscribe((data : Survey) => {

      console.log('Get Survey' + data);
        this.model = data;
    });
    //get list of questions
    this._serv.getListQuestions(id).subscribe((data: any) =>{
      console.log('getListQuestions' + data);
      console.log(data)
      this.questionList = data;
      
    });
  }

  addQuestion(content) {
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

}
