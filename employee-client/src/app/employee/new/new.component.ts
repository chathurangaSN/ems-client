import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/model/employee.model';
import { HttpclientService } from 'src/app/service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  employee:Employee;
  employees:Employee[]
  employeeForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private myHttp:HttpclientService,
    private router:Router
    ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group(
      {
        name: ['',Validators.required],
        age: ['',
        Validators.required
        // Validators.pattern('^[0-9]')
      ]
      }
    );
    console.log("hi from NewComponent ngOnInit  member variable : "+this.employee);

  }
  onSubmit(){
    console.log("hi from NewComponent onSubmit this.employeeForm.value : "+this.employeeForm.value);
    //this.employee =this.employeeForm.value;
    console.log("hi from NewComponent onSubmit this.employee : "+this.employee);

    this.myHttp.createEmployee(this.employeeForm.value).subscribe();
    this.myHttp.getEmployees().subscribe(
      responce => this.employees=responce);
      // responce => this.handleSuccessfulResponce(responce)<---do not undestand yet 11/09/2019
    
    //this.myHttp.createEmployee(this.employee);<----without subscribe it is not work only can pass data
    this.router.navigate(['/employees']);
  }

  // handleSuccessfulResponce(responce) {
  //   this.employeeForm.value = responce
  //   console.log("in handful");
  // }


}
