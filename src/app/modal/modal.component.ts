import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Survey } from '../survey/survey';
import { ModalService } from './modal.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  closeResult: string;
   
  //modelList : Survey[];
  model : Survey= new Survey();
  //list :Survey[] = [];
  
  submitted = false;
  
  formGroup: FormGroup;

  constructor(private modalService: NgbModal, private mservice : ModalService ) { }

              ngOnInit() {
                this.formGroup = new FormGroup({
                  Username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(4),
                    
                  ]),
                  SurveyName: new FormControl('',[
                    Validators.required,
                    Validators.minLength(4),
                  ]),
                  
                });
                
              }
 

//create survey
public post()  {
  this.submitted = true;
  
  if(this.formGroup.invalid ) {
    console.log(this.formGroup)
    console.log('bodyText' + this.model.bodyTextSurvey)
    return alert('Empty fields');
 } 

    this.mservice.createSurvey(this.model).subscribe((data : any) => {
    
      console.log(data);
      
   })
   window.location.reload();
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
}
