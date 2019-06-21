import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';
import{ReversePipe} from '../pipes/reverse.pipe'
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:any;
  dateMessage:string; 
  employees: string[];
  constructor(
    private httpclientService: HttpclientService,
    private router: Router
    ) { }

  ngOnInit() {
    
    this.httpclientService.getEmployees().subscribe(
      responce => this.handleSuccessfulResponce(responce)
    );

    console.log("hi from EmployeeComponent ngOnInit ");
    //console.log(employee);
  }
  handleSuccessfulResponce(responce) {
    this.employees = responce
    console.log("hi from EmployeeComponent handleSuccessfulResponce ");
  }
  addNew(){
    this.router.navigate(['/new']);
  }
  moreDetail(){
    // this.id=Employee.id
    //this.router.navigate(['/more']);
  }
  updateDetail(){
    this.router.navigate(['/update']);
  }
  // getMore(eid:id){
  //   this.httpclientService.getEmployeesById(eid).subscribe(
  //     //responce => this.handleSuccessfulResponce(responce)
  //   );
  // }
}
