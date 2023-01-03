import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelephoneNumberService } from 'src/app/services/telephone-number.service';

@Component({
  selector: 'app-telephone-add',
  templateUrl: './telephone-add.component.html',
  styleUrls: ['./telephone-add.component.css']
})
export class TelephoneAddComponent implements OnInit {

  telephoneAddForm: FormGroup;

  constructor(private telephoneService: TelephoneNumberService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createTelephoneAddForm();
  }

  createTelephoneAddForm() {
    this.telephoneAddForm = this.formBuilder.group({
      description: ["", Validators.required],
      telephoneNo: ["", Validators.required],
      customerId: ["", Validators.required]
    })
  }

  add() {
    if (this.telephoneAddForm.valid) {
      let telephoneModel = Object.assign({}, this.telephoneAddForm.value)
      this.telephoneService.add(telephoneModel).subscribe(response => {
        console.log(response)
      });
      this.telephoneAddForm.reset();
    }
  }

}
