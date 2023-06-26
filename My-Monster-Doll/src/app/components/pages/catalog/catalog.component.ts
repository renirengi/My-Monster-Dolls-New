import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, lastValueFrom, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models/doll';
import { DollService } from 'src/app/services/doll.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public dolls$!: Observable<IDoll[]>;
  public queryParams$!:any;
  constructor(
    private dollService: DollService,
    private route: ActivatedRoute,
  ) {
    this.dolls$ = this.route.queryParams.pipe(
      switchMap(queryParams => this.dollService.getFilteredDolls(queryParams))
    );
   }

  ngOnInit() {

  }

}
