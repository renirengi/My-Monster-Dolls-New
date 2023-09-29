import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { MainComponent } from './components/pages/main/main.component';
import { FiltersResolverService } from './services/filters-resolver.service';
import { DollPageComponent } from './components/pages/doll-page/doll-page.component';


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'catalog', component: CatalogComponent,
  resolve: {
    filters: FiltersResolverService
  } },
  { path: 'catalog/:id', component: DollPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
