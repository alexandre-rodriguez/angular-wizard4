import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { StepComponent } from './step/step.component';
import {CardModule} from 'primeng/card'



@NgModule({
  declarations: [
    WizardComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    WizardComponent,
    StepComponent
  ]
})
export class WizardModule { }
