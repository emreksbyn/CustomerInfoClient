import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  addressAddForm: FormGroup;

  constructor(private addressService: AddressService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAddressAddForm();
  }

  createAddressAddForm() {
    this.addressAddForm = this.formBuilder.group({
      description: ["", Validators.required],
      city: ["", Validators.required],
      district: ["", Validators.required],
      customerId: ["", Validators.required]
    })
  }

  add() {
    if (this.addressAddForm.valid) {
      let addressModel = Object.assign({}, this.addressAddForm.value)
      this.addressService.add(addressModel).subscribe(response => {
        console.log(response)
      });
      this.addressAddForm.reset();
    }
  }

}
