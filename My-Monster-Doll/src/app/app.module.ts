import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

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
