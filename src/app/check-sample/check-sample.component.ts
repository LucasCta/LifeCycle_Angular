import { Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
{

  quantidade:number = 0;
  adicionar() {
    this.quantidade += 1;
  }
  decrementar() {
    this.quantidade -= 1;
  }

  constructor() { }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCkeck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("Goodbye, my friend.");
  }

}
