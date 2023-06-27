import { Component, Input, OnInit } from '@angular/core';
import { IDoll } from 'src/app/models/doll';

@Component({
  selector: 'app-main-catalog',
  templateUrl: './main-catalog.component.html',
  styleUrls: ['./main-catalog.component.scss']
})
export class MainCatalogComponent implements OnInit {
  @Input() dolls!: IDoll[];

  public counter: number = 1;
  public allDolls!: IDoll[];

  constructor() { }

  ngOnInit(): void {
  this.allDolls = this.shuffleDolls(this.dolls);
  this.dolls = this.allDolls.slice(0, 11);
  }

  public shuffleDolls(array:IDoll[]){
  for (let i = array.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
  }
  return array
  }

  public getNextDolls() {
   this.counter++;
   this.dolls = this.allDolls.slice(0,(this.counter*10) + 1);
   console.log(this.dolls)
  }


}
