import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm: FormGroup;
  constructor(private customerService: CustomerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm() {
    this.customerAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      tcNo: ["", Validators.required],
      email: ["", Validators.required]
    })
  }

  add() {
    if (this.customerAddForm.valid) {
      let customerModel = Object.assign({}, this.customerAddForm.value)
      this.customerService.add(customerModel).subscribe(response => {
        console.log(response)
      });
      this.customerAddForm.reset();
    }
  }

}
