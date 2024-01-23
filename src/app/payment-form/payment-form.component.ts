import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms'

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  registrationFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    rollNo: new FormControl('', Validators.maxLength(10)),
    branch: new FormControl(''),
    year: new FormControl(''),
    amount: new FormControl('')
  });

  constructor(



  ) { }

  ngOnInit(): void {
    console.log("challa hai ");

  }

  validate(): boolean {

    if (this.registrationFormGroup.valid) {
      return true;
    }
    else {
      return false;
    }
  }

  onSubmit() {
    if (this.validate()) {
      console.log(this.registrationFormGroup.value);
    }
  }

  onClear() {
    this.registrationFormGroup.get('name')?.patchValue(null);
    this.registrationFormGroup.get('rollNo')?.patchValue(null);
    this.registrationFormGroup.get('branch')?.patchValue(null);
    this.registrationFormGroup.get('year')?.patchValue(null);
    this.registrationFormGroup.get('amount')?.patchValue(null);
  }
}