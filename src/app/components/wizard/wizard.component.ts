import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'pucx-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren(StepComponent)
  wizardSteps!: QueryList<StepComponent>;

  private _steps: Array<StepComponent> = [];
  private _isCompleted: boolean = false;

  @Output()
  onStepChanged: EventEmitter<StepComponent> = new EventEmitter<StepComponent>();

  @Output()
  onNext: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onPrev: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onComplete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.wizardSteps.forEach((step) => {
      /* step.onHidden.subscribe((x: any) => {
        let indexAtual = this._steps.indexOf(x.step)!;
        this._steps.map((step, index) => {
          if (indexAtual < index) {
            step.isDisabled = true;
          }
        });
      }); */

      this._steps.push(step);
    });

    this.steps[0].isActive = true;
  }

  get steps(): Array<StepComponent> {
    return this._steps.filter((step) => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): StepComponent {
    return this.steps.find((step) => step.isActive)!;
  }

  set activeStep(step: StepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get firstStep(): boolean {
    return this.activeStepIndex === 0;
  }

  get lastStep(): boolean {
    return this.activeStepIndex === this.steps.length - 1;
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(step: StepComponent): void {
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: StepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
      this.onNext.emit();
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: StepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
      this.onPrev.emit();
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this._isCompleted = true;
    this.onComplete.emit();
  }
}
