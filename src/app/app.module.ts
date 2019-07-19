import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { WrapperComponent } from './common/wrapper/wrapper.component';
import { LoaderComponent } from './common/loader/loader.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularPaginationComponent } from './pages/angular-pagination/angular-pagination.component';

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
    AngularPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
