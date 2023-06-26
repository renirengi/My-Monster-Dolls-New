import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { MainComponent } from './components/pages/main/main.component';


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'catalog', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
