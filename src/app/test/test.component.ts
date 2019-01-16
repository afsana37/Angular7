import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "";
  
 
  constructor() { }

  ngOnInit() {
  }

  logMessage(value)
  {
    console.log(value);
  }

 

}
