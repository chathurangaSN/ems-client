import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';
import{ReversePipe} from '../pipes/reverse.pipe'
import { from } from 'rxjs';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  index:number=0;
  id:any;
  currentDate:Date=new Date();
  dateMessage:string=this.currentDate.toString();
  employees:Employee[];

  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    private httpclientService: HttpclientService,
    private router: Router
    ) { }

  ngOnChanges() { }
  ngOnInit(){
      
    this.getDetails();
    this.index=this.index+1
    console.log("hi from EmployeeComponent ngOnInit ",this.index );
    //console.log(employee);
  }
  // handleSuccessfulResponce(responce) {
  //   this.employees = responce
  //   console.log("hi from EmployeeComponent handleSuccessfulResponce ");
  // }
  getDetails(){
    this.httpclientService.getEmployees().subscribe(
      responce => this.employees=responce);
  }
  create(){
    this.router.navigate(['/new']);
  }
  readById(id){
    
    this.router.navigate(['/more',]);
  }
  update(id){
    this.router.navigate(['/update']);
  }
  delete(id){
    confirm("delete is succesful: "+id)
    this.httpclientService.deleteEmpById(id)
    .subscribe(()=>console.log(id));
    
    this.router.navigate(['']);
    this.getDetails();
  }
  // getMore(eid:id){
  //   this.httpclientService.getEmployeesById(eid).subscribe(
  //     //responce => this.handleSuccessfulResponce(responce)
  //   );
  // }
  // public openConfirmationDialog() {
  //   this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
  //   .then((confirmed) => console.log('User confirmed:', confirmed))
  //   .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  // }
}
