import { Component, Input, OnInit } from '@angular/core';

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}

@Component({
  selector: 'app-doll-rating',
  templateUrl: './doll-rating.component.html',
  styleUrls: ['./doll-rating.component.scss']
})
export class DollRatingComponent implements OnInit {
  @Input() rating?: number;

  public starCount: number = 10;
  public color: string = 'accent';
  public ratingArr: number[] = [];
  public message: string='';


  constructor() { }

  ngOnInit():void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating:number) {
    // this.update.emit(rating);
    // return false;
    console.log('Mau')
  }

  showIcon(index:number) {
    if(this.rating){
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
  return false;
  }


}
