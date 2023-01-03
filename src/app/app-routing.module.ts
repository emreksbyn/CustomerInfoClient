import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './components/address-add/address-add.component';
import { AddressUpdateComponent } from './components/address-update/address-update.component';
import { AddressComponent } from './components/address/address.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TelephoneAddComponent } from './components/telephone-add/telephone-add.component';
import { TelephoneUpdateComponent } from './components/telephone-update/telephone-update.component';
import { TelephoneComponent } from './components/telephone/telephone.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CustomerComponent },
  
  { path: "customers", component: CustomerComponent },
  { path: "customers/add", component: CustomerAddComponent },
  { path: "customers/getById/:id", component: CustomerUpdateComponent },

  { path: "customers/addresses/list/:customerId", component: AddressComponent },
  { path: "customers/addresses/list/:customerId/addresses/add", component: AddressAddComponent },
  { path: "customers/addresses/list/:customerId/addresses/getById/:id", component: AddressUpdateComponent },
  
  { path: "customers/telephones/list/:customerId", component: TelephoneComponent },
  { path: "customers/telephones/list/:customerId/telephones/add", component: TelephoneAddComponent },
  { path: "customers/telephones/list/:customerId/telephones/getById/:id", component: TelephoneUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
