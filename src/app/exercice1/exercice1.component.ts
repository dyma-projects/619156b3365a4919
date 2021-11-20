import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }

  myPersoStyle: {};
  persoFontStyle: string;
  persoFontWeight: string;
  persoFontColor: string;
  name : string = "John Doe";
  showContent: boolean = false;
  
  setMyPersoStyle(): void{
    this.myPersoStyle = {
      "font-style" : this.persoFontStyle = "italic", 
      "font-weight" : this.persoFontWeight = "bold", 
      "color" : this.persoFontColor = "lightgray",
    };
  }

  ngOnInit(): void {
    this.setMyPersoStyle();
  }

}
