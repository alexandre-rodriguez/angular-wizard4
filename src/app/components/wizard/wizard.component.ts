import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'


@Component({
  selector: 'pucx-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: CdkStepper, useExisting: WizardComponent },
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }],
})
export class WizardComponent extends CdkStepper {
  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previous();
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
  }

  get firstStep(): boolean {
    return this.selectedIndex === 0;
  }

  get lastStep(): boolean {
    return this.selectedIndex === this.steps.length - 1;
  }

  get hasNextStep(): boolean {
    return this.selectedIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.selectedIndex > 0;
  }

  public complete(): void {
    // this._isCompleted = true;
    // this.onComplete.emit();
  }
}
