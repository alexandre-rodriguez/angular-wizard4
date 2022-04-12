import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import {CardModule} from 'primeng/card'
import { CdkStepperModule } from '@angular/cdk/stepper';
import {StepsModule} from 'primeng/steps';


@NgModule({
  declarations: [
    WizardComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    CdkStepperModule,
    StepsModule
  ],
  exports: [
    WizardComponent,
  ]
})
export class WizardModule { }
