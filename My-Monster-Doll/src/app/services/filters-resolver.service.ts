import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forkJoin, map, Observable, of } from 'rxjs';
import { IFilterConfig } from '../models/filters';
import { DollService } from './doll.service';
@Injectable({
  providedIn: 'root'
})
export class FiltersResolverService {
  private readonly filterConfigs: IFilterConfig[] = [
    { name: 'type', title: 'Sort by tags', type: 'list', options: []},
    { name: 'character', title: 'Sort by character', type: 'list', options: []},
    { name: 'year', title: 'Sort by years', type: 'list', options: []},
    { name: 'gender', title: 'Sort by gender', type: 'list', options: []},
    { name: 'series', title: 'Sort by series', type: 'list', options: []},
    { name: 'exclusive', title: 'Sort by exclusive', type: 'list', options: []},
  ];

  constructor(
    private dollService: DollService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IFilterConfig[] | Observable<IFilterConfig[]> | Promise<IFilterConfig[]> {
    const filterNames = this.filterConfigs.map(config => config.name);
    const filtersOptions$ = this.dollService.getAvailableFilterValues(filterNames);
    console.log(filterNames)

    return filtersOptions$.pipe(
      map(filterOptions => {
        return this.filterConfigs.map(config => {
          const name = config.name;
          const options = this.arrayToOption(filterOptions[name]);

          return {...config, options };
        });
      })
    );
  }

  private arrayToOption(values: any[]) {
    return values.map((value) => ({ value, text: value }));
  }
}
