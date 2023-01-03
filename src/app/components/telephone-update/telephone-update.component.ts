import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TelephoneNumber } from 'src/app/models/telephoneNumber';
import { TelephoneNumberService } from 'src/app/services/telephone-number.service';

@Component({
  selector: 'app-telephone-update',
  templateUrl: './telephone-update.component.html',
  styleUrls: ['./telephone-update.component.css']
})
export class TelephoneUpdateComponent implements OnInit {

  telephoneUpdateForm: FormGroup;
  telephone: TelephoneNumber;

  constructor(private telephoneService: TelephoneNumberService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createTelephoneUpdateForm();
    this.activatedRoute.params.subscribe(param => {
      this.getById(param['id']);
    });
  }

  createTelephoneUpdateForm() {
    this.telephoneUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      description: ["", Validators.required],
      telephoneNo: ["", Validators.required],
      customerId: ["", Validators.required]
    })
  }

  getById(id: number) {
    this.telephoneService.getById(id).subscribe(response => {
      this.telephone = response.data;
    })
  }

  update() {
    if (this.telephoneUpdateForm.valid) {
      let telephoneModel = Object.assign({}, this.telephoneUpdateForm.value)
      this.telephoneService.update(telephoneModel).subscribe(response => {
        console.log(response);
      });
      this.getById(telephoneModel.id);
    }
  }

}
