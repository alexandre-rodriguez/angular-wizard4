import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { StepComponent } from './step/step.component';
import {CardModule} from 'primeng/card'
import { CdkStepperModule } from '@angular/cdk/stepper';



@NgModule({
  declarations: [
    WizardComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CdkStepperModule
  ],
  exports: [
    WizardComponent,
    StepComponent
  ]
})
export class WizardModule { }
