import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../service/httpclient.service';
import { Employee } from 'src/app/model/employee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  employee:Employee;

  constructor(
    private httpclientService: HttpclientService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.httpclientService.getEmployeeById(id).subscribe(
      responce => this.handleSuccessfulResponce(responce)
    );
    
  }
  handleSuccessfulResponce(responce) {
    this.employee = responce
    console.log(responce);
    console.log("hi from MoreComponent handleSuccessfulResponce ");
  }

}
