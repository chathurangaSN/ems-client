import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  employee = new Employee();
  baseUrl='http://localhost:8081/api/employee/';

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }
  getEmployeeById(id){
    console.log("getEmployeeById is called: "+id);
    return this.httpClient.get<Employee>(this.baseUrl+id);
    // return this.httpClient.get(this.baseUrl,id);
  }  
  createEmployee(employee1:Employee):Observable<Employee>{
    console.log("hello from service post employee : "+JSON.stringify(employee1));
    return this.httpClient.post<Employee>(this.baseUrl, employee1);
  }
  updateEmployee(employee1:Employee):Observable<Employee>{
    console.log("hello from service post employee : "+JSON.stringify(employee1));
    return this.httpClient.put<Employee>(this.baseUrl, employee1);
  }
  deleteEmpById(id){
    return this.httpClient.delete(this.baseUrl+id);
  }
}
