import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelephoneNumber } from 'src/app/models/telephoneNumber';
import { TelephoneNumberService } from 'src/app/services/telephone-number.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {

  telephones: TelephoneNumber[] = []

  constructor(private telephoneService: TelephoneNumberService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.getTelephonesByCustomer(param['customerId']);
    })
  }

  getTelephonesByCustomer(id: number) {
    this.telephoneService.getByCustomerId(id).subscribe(response => {
      this.telephones = response.data;
    })
  }

  delete(id: number) {
    if (confirm("Are you sure?"))
      this.telephoneService.delete(id).subscribe(response => {
        console.log(response);
        this.activatedRoute.params.subscribe(param => {
          this.getTelephonesByCustomer(param["customerId"]);
        });
      })
  }
}
