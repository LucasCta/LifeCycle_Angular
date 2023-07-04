import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() nome:string = '';
  placepass:string = "20";

  constructor() {
    console.log("Construtor " + `${this.nome}`);
  }

  ngOnChanges(): void {
    console.log("OnChange " + `${this.nome}`);
  }

  ngOnInit(): void {
    this.nome += "x";
    console.log("OnInit " + `${this.nome}`);
  }

}
