import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CustomerComponent },
  { path: "customers", component: CustomerComponent },
  { path: "customers/add", component: CustomerAddComponent },
  { path: "customers/addresses/list/:customerId", component: AddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
