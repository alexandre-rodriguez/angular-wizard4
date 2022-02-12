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

  onNextWizard() {
    console.log('onNextWizard ');
  }

  onPrevWizard() {
    console.log('onPrevWizard ');
  }

  onCompleteWizard() {
    console.log('onPrevWizard ');
  }

  onStep1Next() {
    console.log('Botão Próximo - Chamou o next do passo 01');
  }

  onStep2Next() {
    console.log('Botão Próximo - Chamou o next do passo 02');
  }

  onStep2Previous() {
    console.log('Botão Voltar - Chamou o next do passo 02');
  }

  onStep3Next() {
    console.log('Botão Próximo - Chamou o next do passo 03');
  }

  onStep3Previous() {
    console.log('Botão Voltar - Chamou o next do passo 03');
  }

  onStep4Previous() {
    console.log('Botão Voltar - Chamou o next do passo 04');
  }

  onStepHidden(evento: boolean) {
    console.log('esconder passo oculto ->', evento);
  }

  onComplete() {
    console.log('Chamou o complete');
    this.isCompleted = true;
  }

  onStepChanged(step: StepComponent) {
    console.log('Mudou para ' + step.title);
  }

}
