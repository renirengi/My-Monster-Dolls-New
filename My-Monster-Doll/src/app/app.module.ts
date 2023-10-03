import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { CatalogComponent } from './components/pages/catalog/catalog.component';

import { DollService } from './services/doll.service';
import { MainComponent } from './components/pages/main/main.component';
import { DollsListComponent } from './components/dolls-list/dolls-list.component';
import { DollsCardsComponent } from './components/dolls-cards/dolls-cards.component';
import { MainCatalogComponent } from './components/main-catalog/main-catalog.component';
import { CatalogFiltersComponent } from './components/catalog-filters/catalog-filters.component';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { DollPageComponent } from './components/pages/doll-page/doll-page.component';
import { DollRatingComponent } from './components/doll-rating/doll-rating.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    CatalogComponent,
    MainComponent,
    DollsListComponent,
    DollsCardsComponent,
    MainCatalogComponent,
    CatalogFiltersComponent,
    CatalogFilterComponent,
    DollPageComponent,
    DollRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [DollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
