import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService: AddressService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      this.getAddressesByCustomer(param['customerId'])
    })
  }

  getAddressesByCustomer(id: number) {
    this.addressService.getByCustomerId(id).subscribe(response => {
      this.addresses = response.data;
    })
  }
}
