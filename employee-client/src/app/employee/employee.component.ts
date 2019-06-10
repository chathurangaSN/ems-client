import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: string[];
  constructor(private httpclientService: HttpclientService) { }

  ngOnInit() {
    this.httpclientService.getEmployees().subscribe(
      responce => this.handleSuccessfulResponce(responce)
    );

    console.log("hi");
    //console.log(employee);
  }
  handleSuccessfulResponce(responce) {
    this.employees = responce
    console.log();
  }
}
