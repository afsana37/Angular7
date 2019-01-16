import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
   <input #myInput type="text">
  <button (click) = "logMessage(myInput.value)">Log</button> 
   <button (click) = "logMessage(myInput)">Log</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Afsana";
  
 
  constructor() { }

  ngOnInit() {
  }

  logMessage(value)
  {
    console.log(value);
  }

 

}
