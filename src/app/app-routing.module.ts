import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularPaginationComponent } from './pages/angular-pagination/angular-pagination.component';
import { ExchangeDataComponent } from './pages/exchange-data/exchange-data.component';
import { PipeFilterComponent } from './pages/pipe-filter/pipe-filter.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesTypesComponent } from './pages/directives-types/directives-types.component';
import { AddRemoveItemsComponent } from './pages/add-remove-items/add-remove-items.component';
import { PipeTransformDataComponent } from './pages/pipe-transform-data/pipe-transform-data.component';
import { AngularFetchAPIComponent } from './pages/angular-fetch-api/angular-fetch-api.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'ngPagination', component: AngularPaginationComponent, pathMatch: 'full' },
  { path: 'ExchangeData', component: ExchangeDataComponent, pathMatch: 'full' },
  { path: 'PipeFilter', component: PipeFilterComponent, pathMatch: 'full' },
  { path: 'DataBinding', component: DataBindingComponent, pathMatch: 'full' },
  { path: 'DirectivesType', component: DirectivesTypesComponent, pathMatch: 'full' },
  { path: 'AddRemoveItems', component: AddRemoveItemsComponent, pathMatch: 'full' },
  { path: 'PipeTransformData', component: PipeTransformDataComponent, pathMatch: 'full' },
  { path: 'AngularFetchAPI', component: AngularFetchAPIComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
