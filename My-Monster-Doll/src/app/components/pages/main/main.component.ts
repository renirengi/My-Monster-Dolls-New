import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { IDoll } from 'src/app/models/doll';
import { DollService } from 'src/app/services/doll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public dolls$: Observable<IDoll[]>;

  constructor(
    public dollService: DollService
  ) {
    this.dolls$ = this.dollService.getAllDolls();
  }

  ngOnInit(): void {
  }
}
