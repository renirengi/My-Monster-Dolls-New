import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, lastValueFrom } from 'rxjs';
import { IDoll } from 'src/app/models/doll';
import { DollService } from 'src/app/services/doll.service';

@Component({
  selector: 'app-slider-modal',
  templateUrl: './slider-modal.component.html',
  styleUrls: ['./slider-modal.component.scss']
})
export class SliderModalComponent implements OnInit{

  public doll$:Observable<IDoll>;
  currentIndex: number = 0;
  timeoutId?: number;
  slides!: string[];

  constructor(
    public dialogRef: MatDialogRef<SliderModalComponent>,
    public dollService: DollService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
  ) {
    this.doll$ = this.dollService.getDollById(data.id);
   }

  ngOnInit() {
  }

}




