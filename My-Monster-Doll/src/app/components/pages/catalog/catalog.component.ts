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
  public paramName$: Observable<string>;
  public paramKey$: Observable<string>;
  public dolls$!: Observable<IDoll[]>;
  constructor(
    private dollService: DollService,
    private route: ActivatedRoute,
  ) {
    this.paramName$ = this.route.queryParams.pipe(
      switchMap(queryParams => Object.values(queryParams))
    );
    this.paramKey$ = this.route.queryParams.pipe(
      switchMap(queryParams => Object.keys(queryParams))
    );
    this.dolls$ = this.route.queryParams.pipe(
      switchMap(queryParams => this.dollService.getFilteredDolls(queryParams))
    );
   }

ngOnInit() {

  }

}
