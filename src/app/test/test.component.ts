import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-test",
  template: `
    <div *ngFor="let color of colors; even as e">
      <h2>{{e}} {{color}}</h2>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public colors =  ["red", "blue", "green", "yellow"];

  constructor() {}

  ngOnInit() {}
}
