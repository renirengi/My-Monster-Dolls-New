import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { IDoll } from 'src/app/models/doll';
import { DollService } from 'src/app/services/doll.service';

@Component({
  selector: 'app-doll-page',
  templateUrl: './doll-page.component.html',
  styleUrls: ['./doll-page.component.scss']
})
export class DollPageComponent implements OnInit {
  public doll$: Observable<IDoll>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dollService: DollService
  ) {
    const dollId$ = this.activatedRoute.params.pipe(map((params) => params['id']));
    this.doll$ = dollId$.pipe(switchMap((id) => this.dollService.getDollById(id)));
  }

  ngOnInit(): void {
  }

}
