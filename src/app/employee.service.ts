import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [

      {"id":1, "name": "Newt", "age": 30},
      {"id":2, "name": "Harry", "age": 18},
      {"id":3, "name": "Ron", "age": 19},
      {"id":4, "name": "Snape", "age": 40}

    ];

  }
}
