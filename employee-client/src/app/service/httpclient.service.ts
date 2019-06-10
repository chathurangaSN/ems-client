import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpClient:HttpClient) { }

  getEmployees(){
    return this.httpClient.get<Employee>('http://localhost:8080/api/employee');
  }
}
