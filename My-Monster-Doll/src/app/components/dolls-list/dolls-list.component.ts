import { Component, Input, OnInit } from '@angular/core';
import { IDoll } from 'src/app/models/doll';

@Component({
  selector: 'app-dolls-list',
  templateUrl: './dolls-list.component.html',
  styleUrls: ['./dolls-list.component.scss']
})
export class DollsListComponent implements OnInit {
  @Input() dolls!: IDoll[];
  constructor() { }

  ngOnInit(): void {
  }

}
