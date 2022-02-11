import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'pucx-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  showNext: boolean = true;

  @Input()
  showPrev: boolean = true;

  @Input()
  isValid: boolean = true;

  @Output()
  onNext: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onPrev: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onComplete: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onHiddenEvent: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  private _hidden = false;
  isDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  @Input('hidden')
  set hidden(hidden: boolean) {
    this._hidden = hidden;
    this.onHiddenEvent.emit(hidden);
    this._isActive = false;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }
}
