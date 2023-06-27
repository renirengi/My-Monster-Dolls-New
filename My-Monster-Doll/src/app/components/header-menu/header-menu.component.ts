import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { DollService } from 'src/app/services/doll.service';
import { icons } from 'src/assets/menu';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public icon:any= icons;

  public types$: Observable<string[]>;
  public characters$: Observable<string[]>;
  public years$: Observable<string[]>;
  public genders$: Observable<string[]>;
  public series$: Observable<string[]>;
  public exclusives$: Observable<string[]>;

  constructor(
    private dollService: DollService,
    private router: Router
  ) {
    this.types$ = this.dollService.getAvailable('type');
    this.characters$ = this.dollService.getAvailable('character');
    this.years$ = this.dollService.getAvailable('year');
    this.genders$ = this.dollService.getAvailable('gender');
    this.series$ = this.dollService.getAvailable('series');
    this.exclusives$ = this.dollService.getAvailable('exclusive');
   }

  ngOnInit(): void {
    console.log(icons['Amanita Nightshade'])
  }

  public async onRoute(menuItem: string, par:string) {
    const dolls = await lastValueFrom(this.dollService.getDollsByParamsFromMenu(menuItem, par));
    console.log(dolls)
    this.router.navigate(['/catalog'], { queryParams: { [menuItem]: par }});
  }



}

