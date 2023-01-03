import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddressComponent } from './components/address/address.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { AddressAddComponent } from './components/address-add/address-add.component';
import { AddressUpdateComponent } from './components/address-update/address-update.component';
import { TelephoneAddComponent } from './components/telephone-add/telephone-add.component';
import { TelephoneUpdateComponent } from './components/telephone-update/telephone-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    NavbarComponent,
    CustomerAddComponent,
    TelephoneComponent,
    CustomerUpdateComponent,
    AddressAddComponent,
    AddressUpdateComponent,
    TelephoneAddComponent,
    TelephoneUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
