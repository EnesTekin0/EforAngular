import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  getEmployee(employee: any) {
    let url = "http://localhost:5173/api/Employee";
     return this.http.post(url, employee, this.httpOptions);
  }

}
