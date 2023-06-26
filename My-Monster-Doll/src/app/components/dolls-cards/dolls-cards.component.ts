import { Component, Input, OnInit } from '@angular/core';
import { IDoll } from 'src/app/models/doll';

@Component({
  selector: 'app-dolls-cards',
  templateUrl: './dolls-cards.component.html',
  styleUrls: ['./dolls-cards.component.scss']
})
export class DollsCardsComponent implements OnInit {
  @Input() doll!: IDoll;
  constructor() { }

  ngOnInit(): void {
  }

}
