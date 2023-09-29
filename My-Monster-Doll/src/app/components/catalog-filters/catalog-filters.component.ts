import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilterConfig } from 'src/app/models/filters';
import { map, switchMap } from 'rxjs/operators';
import { IDoll } from 'src/app/models/doll';

@Component({
  selector: 'app-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.scss']
})
export class CatalogFiltersComponent implements OnInit {
  @Input() dolls!: IDoll[];

  public filters$!: Observable<IFilterConfig[]>;
  public paramName$: Observable<string>;
  public paramKey$: Observable<string>;
  public dollsLength!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
      this.filters$ = this.route.data.pipe(
        map(({ filters }) => filters)
      );
      this.paramName$ = this.route.queryParams.pipe(
        switchMap(queryParams => Object.values(queryParams))
      );
      this.paramKey$ = this.route.queryParams.pipe(
        switchMap(queryParams => Object.keys(queryParams))
      );
     }

  ngOnInit(): void {
    this.dollsLength = this.dolls.length;
  }

  public onChange({name, values}: {name: string, values: string[]}) {
    this.router.navigate(['/catalog'], { queryParams: { [name]: values }});
    console.log(name, values);
  }
}
