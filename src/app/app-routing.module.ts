import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TelephoneComponent } from './components/telephone/telephone.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CustomerComponent },
  { path: "customers", component: CustomerComponent },
  { path: "customers/add", component: CustomerAddComponent },
  // { path: "customers/update", component: CustomerUpdateComponent },
  { path: "customers/getById/:id", component: CustomerUpdateComponent },
  { path: "customers/addresses/list/:customerId", component: AddressComponent },
  { path: "customers/telephones/list/:customerId", component: TelephoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
