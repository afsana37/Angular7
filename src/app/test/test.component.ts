import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Khushbu">
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Khushbu">
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Afsana";
  public myId = "testId";
  public isDisabled = false;
 
  constructor() { }

  ngOnInit() {
  }

 

}
