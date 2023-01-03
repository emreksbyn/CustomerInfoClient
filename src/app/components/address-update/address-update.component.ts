import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {

  addressUpdateForm: FormGroup;
  address: Address;

  constructor(private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAddressUpdateForm();
    this.activatedRoute.params.subscribe(param => {
      this.getById(param['id']);
    });
  }

  createAddressUpdateForm() {
    this.addressUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      description: ["", Validators.required],
      city: ["", Validators.required],
      district: ["", Validators.required],
      customerId: ["", Validators.required]
    })
  }

  getById(id: number) {
    this.addressService.getById(id).subscribe(response => {
      this.address = response.data;
    })
  }

  update() {
    if (this.addressUpdateForm.valid) {
      let addressModel = Object.assign({}, this.addressUpdateForm.value)
      this.addressService.update(addressModel).subscribe(response => {
        console.log(response);
      });
      this.getById(addressModel.id);
    }
  }

}
