import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  employee = new Employee();
  baseUrl='http://localhost:8080/api/employee';

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
    return this.httpClient.get<Employee>(this.baseUrl);
  }
  // getEmployeesById(eid:id){
  //   return this.httpClient.get<Employee>(this.baseUrl,eid);
  // }
  
  createEmployee(employee1:Employee):Observable<Employee>{
    console.log("hello from service post employee : "+JSON.stringify(employee1));
    return this.httpClient.post<Employee>(this.baseUrl, employee1);
  }
}
