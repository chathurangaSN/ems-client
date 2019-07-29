import { Component,Input, OnInit } from '@angular/core';
import{ConfirmationDialogService} from './confirmation-dialog.service'
import { from } from 'rxjs';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  // @Input() title: string;
  // @Input() message: string;
  // @Input() btnOkText: string;
  // @Input() btnCancelText: string;
  message: any;

  
  constructor(
    private confirmDialogService: ConfirmationDialogService
    //private activeModal: NgbActiveModal
    ) { }

  ngOnInit() {
    this.confirmDialogService.getMessage().subscribe(message => {  
      this.message = message;  
  });
  }

  // public decline() {
  //   this.activeModal.close(false);
  // }

  // public accept() {
  //   this.activeModal.close(true);
  // }

  // public dismiss() {
  //   this.activeModal.dismiss();
  // }

}
