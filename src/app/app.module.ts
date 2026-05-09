import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './core/interceptor/global.interceptor';
import { HttpClientModule } from '@angular/common/http';
import{ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/home/home.component';
import { ɵInternalFormsSharedModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({ timeOut: 10000,
        positionClass: 'toast-top-center', }), // ToastrModule added
    BrowserAnimationsModule,
    ɵInternalFormsSharedModule
],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
 