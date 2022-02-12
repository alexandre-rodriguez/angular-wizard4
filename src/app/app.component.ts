import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepComponent } from './components/wizard/step/step.component';

@Component({
  selector: 'pucx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};

  frmStepper!: FormGroup;

  get formArray(): AbstractControl {
    return this.frmStepper.get('steps')!;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frmStepper = this.fb.group({
      steps: this.fb.array([
        this.fb.group({
          firstName: ['First Name', Validators.compose([Validators.required])],
          lastName: ['Last Name', Validators.compose([Validators.required])],
          phone: [null], // optional
          email: [
            'johndoe@example.com',
            Validators.compose([Validators.required, Validators.email]),
          ],
        }),
        this.fb.group({
          addressOne: [null, Validators.compose([Validators.required])],
          addressTwo: [null], // optional
          city: [null, Validators.compose([Validators.required])],
          county: [null, Validators.compose([Validators.required])],
          country: [null, Validators.compose([Validators.required])],
        }),
        this.fb.group({
          creditCardNo: [
            '4111 1111 1111 1111',
            Validators.compose([Validators.required]),
          ],
          expiryDate: ['', Validators.compose([Validators.required])],
          cvvCode: ['', Validators.compose([Validators.required])],
        }),
      ]),
    });
  }

  submit(): void {
    console.log(this.frmStepper.value);
    this.frmValues = this.frmStepper.value;
  }

}
