import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private httpclientService: HttpclientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.fb.group(
      {
        name: ['', Validators.required],
        age: ['', Validators.required]
      }
    );
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getEmployeeDetails(id)
  }

  getEmployeeDetails(id) {

    this.httpclientService.getEmployeeById(id)
      .subscribe(data => {
        this.employee = data;
        console.log(this.employee);
      });
  }
  onSubmit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.httpclientService.updateEmployee(this.employeeForm.value,id).subscribe();
    this.router.navigate(['/employees'],this.employee.id);
  }

}
