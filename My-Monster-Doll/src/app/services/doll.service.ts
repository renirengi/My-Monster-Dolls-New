import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDoll } from '../models/doll';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DollService {
  private readonly baseUrl = 'http://localhost:3000/dolls';

  constructor(
    private http: HttpClient
    ) {}

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
            dolls.forEach((doll) => years.add(doll.type));
          } else if (value === 'series') {
            dolls.forEach((doll) => years.add(doll.series));
          } else if (value === 'exclusive') {
            dolls.forEach((doll) => years.add(doll.exclusive));
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
}
