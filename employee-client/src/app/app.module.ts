import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './service/httpclient.service';
import { NewComponent } from './employee/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MoreComponent } from './employee/more/more.component';
import { UpdateComponent } from './employee/update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeleteComponent } from './employee/delete/delete.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewComponent,
    PageNotFoundComponent,
    ReversePipe,
    MoreComponent,
    UpdateComponent,
    NavbarComponent,
    DeleteComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpclientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
