import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IDoll } from 'src/app/models/doll';
import { DollService } from 'src/app/services/doll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public dolls!: IDoll[];

  constructor(
    public dollService: DollService
  ) { }

  ngOnInit(): void {
  }

  public async generateRandomDolls() {
     this.dolls = await lastValueFrom(this.dollService.getAllDolls());
     this.shuffleDolls(this.dolls);
     console.log(this.dolls)
  }

  public shuffleDolls(array:IDoll[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}
