import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { ProjectListService } from './service/project-list.service';
import { FilterPipe } from './service/filter.pipe';
import { HostDirectiveService } from './service/host-directive.service';
import { ConvertorPipe } from './service/convertor.pipe.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { WrapperComponent } from './common/wrapper/wrapper.component';
import { LoaderComponent } from './common/loader/loader.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularPaginationComponent } from './pages/angular-pagination/angular-pagination.component';
import { ExchangeDataComponent } from './pages/exchange-data/exchange-data.component';
import { ParentComponent } from './pages/exchange-data/parent/parent.component';
import { ChildComponent } from './pages/exchange-data/child/child.component';
import { PipeFilterComponent } from './pages/pipe-filter/pipe-filter.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesTypesComponent } from './pages/directives-types/directives-types.component';
import { AddRemoveItemsComponent } from './pages/add-remove-items/add-remove-items.component';
import { PipeTransformDataComponent } from './pages/pipe-transform-data/pipe-transform-data.component';
import { AngularFetchAPIComponent } from './pages/angular-fetch-api/angular-fetch-api.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WrapperComponent,
    LoaderComponent,
    HomePageComponent,
    AngularPaginationComponent,
    ExchangeDataComponent,
    ParentComponent,
    ChildComponent,
    PipeFilterComponent,
    FilterPipe,
    DataBindingComponent,
    DirectivesTypesComponent,
    HostDirectiveService,
    ConvertorPipe,
    AddRemoveItemsComponent,
    PipeTransformDataComponent,
    AngularFetchAPIComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
