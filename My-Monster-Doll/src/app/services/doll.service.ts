import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDoll } from '../models/doll';
import { Observable, map } from 'rxjs';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DollService {
  private readonly baseUrl = 'http://localhost:3000/dolls';

  constructor(
    private http: HttpClient
    ) {}

    public getAllDolls(): Observable<IDoll[]> {
      return this.http.get<IDoll[]>(this.baseUrl);
    }

    public getDollsByParamsFromMenu(menuItem:string, params:string): Observable<IDoll[]>{
      const newUrl = `${this.baseUrl}?${menuItem}_like=${params}`;
    return this.http.get<IDoll[]>(newUrl);
    }

    public getAvailable(value: string): Observable<string[]> {
      return this.http.get<IDoll[]>('http://localhost:3000/dolls').pipe(
        map((dolls) => {
          const years = new Set();
          if (value === 'year') {
            dolls.forEach((doll) => years.add(doll.year));
          } else if (value === 'type') {
            dolls.forEach((doll) =>years.add(doll.type));
          } else if (value === 'series') {dolls.forEach((doll) =>{
            if (doll.series) {years.add(doll.series)}
            else { console.log(doll.id)}
          });
          } else if (value === 'exclusive') {
            dolls.forEach((doll) => {
              if (doll.exclusive) years.add(doll.exclusive)
            });
          } else if (value === 'character') {
            dolls.forEach((doll) => doll.character?.forEach((item)=> years.add(item)))
          }
           else if (value === 'gender') {
            dolls.forEach((doll) => doll.gender?.forEach((item)=> years.add(item)));
          }
          return Array.from(years).sort() as string[];
        })
      );
    }

    public getDollsByParams(params: { [key: string]: string }, page: number = 1 ): Observable<IDoll[]> {
      params = { ...params, page: page.toString() };

      return this.http.get<IDoll[]>(this.baseUrl, { params });
    }

    public getFilteredDolls(queryParams: Params): Observable<IDoll[]> {
      const page = queryParams['page'] | 1;

      return this.getDollsByParams(this.getFilterParams(queryParams), page);
    }

    /** Transforms query params to films request params object */
    private getFilterParams(queryParams: Params): {[index: string]: string} {
      const listFilters = ['year', 'character', 'series','gender', 'type', 'exclusive'];
      const stringFIlters = ['searchString'];

      const listConverter = (key: string, values: string|string[]) => {

        const keyString = `${key}_like`;
        const valueString = Array.isArray(values) ? values.reduce((acc, val, i) => (i === 0 ? `(${val})` : `${acc}|(${val})`), '') : values;


        return valueString !== '()' ? { [keyString]: valueString } : {};
      };
      const searchStringConverter = (value: string) => {
        return { q: value };
      };

      const paramsReducer = (params: {[index: string]: string}, [key, value]: any[]) => {
        let newParams: {[index: string]: string};
        const filterKeys = [...listFilters, ...stringFIlters];

        if (filterKeys.includes(key) && value !== undefined) {
          if (key === 'searchString') {
            newParams = searchStringConverter(value);
          } else {
            newParams = listConverter(key, value);
          }

          params = {...params, ...newParams};
        }

        return params;
      }

      return Object.entries(queryParams).reduce(paramsReducer, {});
    }
}
function shareReplay(arg0: number): import("rxjs").OperatorFunction<IDoll[], unknown> {
  throw new Error('Function not implemented.');
}

