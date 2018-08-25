import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import RoutesModule from './route.module';
import { NestedComponent } from './nested/nested.component';
import { Child1Component } from './nested/child1/child1.component';
import { Child2Component } from './nested/child2/child2.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photo/photo.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NestedComponent,
    Child1Component,
    Child2Component,
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
