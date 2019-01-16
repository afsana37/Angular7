import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Afsana'">Greet</button>
    {{greeting}}
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name = "Afsana";
  public greeting="";
 
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = 'Welcome to Kbookwiz';
  }

 

}
