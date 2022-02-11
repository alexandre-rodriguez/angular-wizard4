import { Component } from '@angular/core';
import { StepComponent } from './components/wizard/step/step.component';

@Component({
  selector: 'pucx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(): void {}

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event: any) {
    console.log('Step1 - Next');
  }

  onStep2Next(event: any) {
    console.log('Step2 - Next');
  }

  onStep3Next(event: any) {
    console.log('Step3 - Next');
  }

  onComplete(event: any) {
    this.isCompleted = true;
  }

  onStepChanged(step: StepComponent) {
    console.log('Changed to ' + step.title);
  }

}
