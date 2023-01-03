import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerUpdateForm: FormGroup;
  customer: Customer;

  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createCustomerUpdateForm();
    this.activatedRoute.params.subscribe(param => {
      this.getById(param['id']);
    });
  }

  createCustomerUpdateForm() {
    this.customerUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      tcNo: ["", Validators.required],
      email: ["", Validators.required]
    })
  }

  getById(id: number) {
    this.customerService.getById(id).subscribe(response => {
      this.customer = response.data;
    })
  }

  update() {
    if (this.customerUpdateForm.valid) {
      let customerModel = Object.assign({}, this.customerUpdateForm.value)
      this.customerService.update(customerModel).subscribe(response => {
        console.log(response);
      });
      this.getById(customerModel.id);
    }
  }

}
