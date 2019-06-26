import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee:Employee;
  constructor(
    private httpclientService: HttpclientService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getEmployeeDetails(id)
  }

 getEmployeeDetails(id){

  this.httpclientService.getEmployeeById(id)
  .subscribe(data =>{ 
    
    this.employee = data;
    console.log(this.employee);
  });
}

}
